/* =========================================================
   沖繩自由行網站 — 共用邏輯
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  initNav();
  initPrintButtons();
  initCurrencyConverter();
  initChecklist();
  initCopyButtons(document);
  initMapButtons(document);
  initMobileNextBar();

  if (typeof renderPage === "function") {
    renderPage(); // 各頁面自訂渲染（day pages / index / list pages）
  }

  // 每分鐘重新計算一次「現在」狀態
  setInterval(() => {
    initMobileNextBar();
    if (typeof refreshCurrentState === "function") refreshCurrentState();
  }, 60 * 1000);
});

/* ---------------- Nav ---------------- */
function initNav() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".main-nav");
  if (!toggle || !nav) return;
  toggle.addEventListener("click", () => nav.classList.toggle("open"));
  nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

  // highlight active link
  const path = location.pathname.split("/").pop() || "index.html";
  nav.querySelectorAll("a").forEach(a => {
    const href = a.getAttribute("href").split("#")[0];
    if (href === path) a.classList.add("active");
  });
}

/* ---------------- Google Maps ---------------- */
function mapsUrl(query) {
  return "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(query);
}
function navUrl(query) {
  return "https://www.google.com/maps/dir/?api=1&destination=" + encodeURIComponent(query);
}

function initMapButtons(scope) {
  scope.querySelectorAll("[data-map-query]").forEach(el => {
    const q = el.getAttribute("data-map-query");
    if (!q) return;
    el.addEventListener("click", (e) => {
      e.preventDefault();
      window.open(mapsUrl(q), "_blank", "noopener");
    });
  });
  scope.querySelectorAll("[data-nav-query]").forEach(el => {
    const q = el.getAttribute("data-nav-query");
    if (!q) return;
    el.addEventListener("click", (e) => {
      e.preventDefault();
      window.open(navUrl(q), "_blank", "noopener");
    });
  });
}

/* ---------------- Copy address ---------------- */
function initCopyButtons(scope) {
  scope.querySelectorAll("[data-copy-text]").forEach(btn => {
    btn.addEventListener("click", async () => {
      const text = btn.getAttribute("data-copy-text");
      try {
        await navigator.clipboard.writeText(text);
      } catch (e) {
        const ta = document.createElement("textarea");
        ta.value = text;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
      }
      showToast("地址已複製 📋");
      btn.classList.add("copied");
      const original = btn.innerHTML;
      btn.innerHTML = "已複製 ✓";
      setTimeout(() => { btn.classList.remove("copied"); btn.innerHTML = original; }, 1600);
    });
  });
}

/* ---------------- Toast ---------------- */
let toastTimer;
function showToast(msg) {
  let toast = document.querySelector(".toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2000);
}

/* ---------------- Print ---------------- */
function initPrintButtons() {
  document.querySelectorAll("[data-print]").forEach(btn => {
    btn.addEventListener("click", () => window.print());
  });
}

/* ---------------- Currency Converter ---------------- */
const JPY_PER_TWD = 4.85; // 概估匯率，僅供快速換算參考，實際請以當下匯率為準

function parseNum(v) {
  const n = parseFloat((v || "").toString().replace(/,/g, ""));
  return isNaN(n) ? null : n;
}

function initCurrencyConverter() {
  const twdInput = document.querySelector("#conv-twd");
  const jpyInput = document.querySelector("#conv-jpy");
  const rateLabel = document.querySelector("#conv-rate-label");
  if (!twdInput || !jpyInput) return;

  if (rateLabel) rateLabel.textContent = `約 1 台幣 ≈ ${JPY_PER_TWD} 日圓（僅供參考，實際請以當下匯率為準）`;

  twdInput.addEventListener("input", () => {
    const v = parseNum(twdInput.value);
    jpyInput.value = v === null ? "" : Math.round(v * JPY_PER_TWD).toLocaleString();
  });
  jpyInput.addEventListener("input", () => {
    const v = parseNum(jpyInput.value);
    twdInput.value = v === null ? "" : Math.round(v / JPY_PER_TWD).toLocaleString();
  });

  twdInput.value = "1,000";
  jpyInput.value = Math.round(1000 * JPY_PER_TWD).toLocaleString();
}

/* ---------------- Checklist ---------------- */
const CHECKLIST_KEY = "okinawa-trip-checklist";

function initChecklist() {
  const wrap = document.querySelector("#checklist-groups");
  const toggleBtn = document.querySelector("#checklist-toggle");
  const progressEl = document.querySelector("#checklist-progress");
  if (!wrap || typeof TRIP === "undefined") return;

  const saved = JSON.parse(localStorage.getItem(CHECKLIST_KEY) || "{}");

  wrap.innerHTML = TRIP.checklist.map((group, gi) => `
    <div class="checklist-group">
      <h4>${group.group}</h4>
      ${group.items.map((item, ii) => {
        const id = `chk-${gi}-${ii}`;
        const checked = !!saved[id];
        return `
          <label class="checklist-item ${checked ? "checked" : ""}" for="${id}">
            <input type="checkbox" id="${id}" data-id="${id}" ${checked ? "checked" : ""} />
            <span>${item}</span>
          </label>`;
      }).join("")}
    </div>
  `).join("");

  function updateProgress() {
    const boxes = wrap.querySelectorAll("input[type=checkbox]");
    const done = wrap.querySelectorAll("input[type=checkbox]:checked").length;
    if (progressEl) progressEl.textContent = `已完成 ${done} / ${boxes.length} 項`;
  }

  wrap.querySelectorAll("input[type=checkbox]").forEach(box => {
    box.addEventListener("change", () => {
      const state = JSON.parse(localStorage.getItem(CHECKLIST_KEY) || "{}");
      state[box.dataset.id] = box.checked;
      localStorage.setItem(CHECKLIST_KEY, JSON.stringify(state));
      box.closest(".checklist-item").classList.toggle("checked", box.checked);
      updateProgress();
    });
  });

  updateProgress();

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      wrap.classList.toggle("open");
      toggleBtn.textContent = wrap.classList.contains("open") ? "收合 Checklist ▲" : "展開出發前 Checklist ▼";
    });
  }
}

/* ---------------- Date / current-stop helpers ---------------- */
function getAllStopsSorted() {
  const all = [];
  TRIP.days.forEach(day => {
    day.stops.forEach(stop => {
      if (stop.sortMinutes == null) return;
      all.push({ ...stop, day });
    });
  });
  return all;
}

// 回傳 {status: 'before'|'during'|'after', day, stop, nextStop}
function getTripState() {
  const now = new Date();
  const todayStr = now.toISOString().slice(0, 10);

  const startDate = new Date(TRIP.tripStart + "T00:00:00");
  const endDate = new Date(TRIP.tripEnd + "T23:59:59");

  if (now < startDate) {
    const day1 = TRIP.days[0];
    return { status: "before", day: day1, stop: day1.stops[0], now };
  }
  if (now > endDate) {
    const lastDay = TRIP.days[TRIP.days.length - 1];
    return { status: "after", day: lastDay, stop: lastDay.stops[lastDay.stops.length - 1], now };
  }

  const today = TRIP.days.find(d => d.date === todayStr);
  if (!today) {
    // 在旅程日期範圍內但找不到對應日期資料（不應發生），保底判斷最近一天
    return { status: "during", day: TRIP.days[0], stop: TRIP.days[0].stops[0], now };
  }

  const nowMinutes = now.getHours() * 60 + now.getMinutes();
  const stops = today.stops.filter(s => s.sortMinutes != null);
  let current = stops[0];
  let next = null;
  for (let i = 0; i < stops.length; i++) {
    if (stops[i].sortMinutes <= nowMinutes) {
      current = stops[i];
      next = stops[i + 1] || null;
    }
  }
  if (!next) {
    // 找下一天的第一站
    const dayIdx = TRIP.days.findIndex(d => d.id === today.id);
    const nextDay = TRIP.days[dayIdx + 1];
    if (nextDay) next = { ...nextDay.stops[0], crossDay: true, dayTitle: nextDay.title };
  }

  return { status: "during", day: today, stop: current, nextStop: next, now };
}

/* ---------------- Mobile sticky next-stop bar ---------------- */
function initMobileNextBar() {
  let bar = document.querySelector(".mobile-next-bar");
  if (typeof TRIP === "undefined") return;
  const state = getTripState();

  if (!bar) {
    bar = document.createElement("div");
    bar.className = "mobile-next-bar";
    document.body.appendChild(bar);
  }

  let label = "";
  let title = "";
  let mapQ = "";

  if (state.status === "before") {
    const daysLeft = Math.ceil((new Date(TRIP.tripStart) - new Date()) / 86400000);
    label = `距離出發還有 ${daysLeft} 天`;
    title = "準備出發沖繩！";
  } else if (state.status === "after") {
    label = "旅程已結束";
    title = "謝謝你，沖繩見！🌺";
  } else if (state.nextStop) {
    label = state.nextStop.crossDay ? `${state.nextStop.dayTitle}・下一站` : "下一站";
    title = state.nextStop.title;
    mapQ = state.nextStop.mapQuery || "";
  } else {
    label = "現在行程";
    title = state.stop ? state.stop.title : "";
    mapQ = state.stop ? state.stop.mapQuery : "";
  }

  bar.innerHTML = `
    <div>
      <div class="label">${label}</div>
      <div class="title">${title}</div>
    </div>
    ${mapQ ? `<button class="btn btn-primary btn-sm" data-map-query="${mapQ.replace(/"/g, "&quot;")}">導航 🧭</button>` : ""}
  `;
  initMapButtons(bar);
}
