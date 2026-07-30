/* =========================================================
   沖繩自由行網站 — 頁面渲染
   每個 HTML 頁面在載入本檔前先定義 PAGE_TYPE（及必要參數）
   ========================================================= */

function esc(s) { return (s || "").toString().replace(/"/g, "&quot;"); }

function renderMapChips(stop) {
  if (stop.mapQueries && stop.mapQueries.length) {
    return stop.mapQueries.map(m => `
      <button class="chip-btn" data-map-query="${esc(m.query)}">🗺️ ${m.label} 地圖</button>
      <button class="chip-btn" data-nav-query="${esc(m.query)}">🧭 ${m.label} 導航</button>
    `).join("");
  }
  if (!stop.mapQuery) return "";
  return `
    <button class="chip-btn" data-map-query="${esc(stop.mapQuery)}">🗺️ 開啟地圖</button>
    <button class="chip-btn" data-nav-query="${esc(stop.mapQuery)}">🧭 導航</button>
  `;
}

function renderLinkChips(stop) {
  if (!stop.links) return "";
  return stop.links.map(l => `<a class="chip-btn" href="${l.url}" target="_blank" rel="noopener">🔗 ${l.label}</a>`).join("");
}

function renderAddressBlock(stop) {
  if (stop.addresses && stop.addresses.length) {
    return stop.addresses.map(a => `
      <div class="stop-address">📍 <b>${a.label}</b>：${a.address}</div>
      <div class="stop-actions" style="margin-bottom:10px">
        <button class="chip-btn" data-map-query="${esc(a.mapQuery)}">🗺️ ${a.label} 地圖</button>
        <button class="chip-btn" data-nav-query="${esc(a.mapQuery)}">🧭 ${a.label} 導航</button>
        <button class="chip-btn" data-copy-text="${esc(a.address)}">📋 複製${a.label}地址</button>
      </div>
    `).join("");
  }
  if (!stop.address || stop.address === "—") return "";
  return `
    <div class="stop-address">📍 ${stop.address}</div>
    <div class="stop-actions" style="margin-bottom:10px">
      ${stop.mapQuery ? `<button class="chip-btn" data-map-query="${esc(stop.mapQuery)}">🗺️ 開啟地圖</button>
      <button class="chip-btn" data-nav-query="${esc(stop.mapQuery)}">🧭 導航</button>` : ""}
      <button class="chip-btn" data-copy-text="${esc(stop.address)}">📋 複製地址</button>
    </div>
  `;
}

function renderStopCard(stop, isCurrent) {
  const detailBlock = stop.detail ? `<div class="stop-detail">${stop.detail}</div>` : "";
  const noteBlock = stop.note ? `<div class="stop-note">${stop.note}</div>` : "";
  const transportChip = (stop.transport && stop.transport !== "—")
    ? `<span class="meta-item">🚗 ${stop.transport}</span>` : "";
  const linksRow = renderLinkChips(stop);

  return `
    <div class="timeline-item ${isCurrent ? "is-current" : ""}">
      <div class="stop-card ${isCurrent ? "is-current" : ""}">
        <div class="stop-time">${stop.time}</div>
        <div class="stop-title">${stop.title}</div>
        ${detailBlock}
        ${transportChip ? `<div class="stop-meta">${transportChip}</div>` : ""}
        ${renderAddressBlock(stop)}
        ${noteBlock}
        ${linksRow ? `<div class="stop-actions">${linksRow}</div>` : ""}
      </div>
    </div>
  `;
}

function renderTimeline(day) {
  const el = document.querySelector("#timeline");
  if (!el) return;
  const state = getTripState();
  const isToday = state.status === "during" && state.day.id === day.id;

  el.innerHTML = day.stops.map(stop => {
    const isCurrent = isToday && state.stop && state.stop.time === stop.time && state.stop.title === stop.title;
    return renderStopCard(stop, isCurrent);
  }).join("");

  initMapButtons(el);
  initCopyButtons(el);
}

function renderDayHero(day) {
  const badge = document.querySelector("#day-badge");
  const title = document.querySelector("#day-title");
  const summary = document.querySelector("#day-summary");
  const mealStrip = document.querySelector("#meal-strip");
  const hotelLink = document.querySelector("#day-hotel-link");
  if (badge) badge.textContent = `${day.title} ・ ${day.date.replace(/-/g,"/")}（${day.weekday}）・ 衣服穿${day.outfit}`;
  if (title) title.textContent = day.summary;
  if (hotelLink) {
    hotelLink.textContent = "🏨 " + day.hotel;
    hotelLink.href = day.hotelPage || "hotel.html";
  }
  if (mealStrip) {
    mealStrip.innerHTML = `
      <span><b>早餐</b>${day.meals.breakfast}</span>
      <span><b>午餐</b>${day.meals.lunch}</span>
      <span><b>晚餐</b>${day.meals.dinner}</span>
    `;
  }
}

function renderDayNav(day) {
  const el = document.querySelector("#day-switch");
  if (!el) return;
  el.innerHTML = TRIP.days.map(d => `
    <a class="chip-btn ${d.id === day.id ? "copied" : ""}" href="day0${d.id}.html">Day${d.id}</a>
  `).join("");
}

/* ---------------- Index Page ---------------- */
function renderIndexDayGrid() {
  const el = document.querySelector("#day-grid");
  if (!el) return;
  const state = getTripState();
  const outfitColor = { "粉紅": "#F2A488", "藍色": "#4FA9C7", "白色": "#B9C9CE" };

  el.innerHTML = TRIP.days.map(day => {
    const isToday = state.status === "during" && state.day.id === day.id;
    return `
    <a class="day-card ${isToday ? "is-today" : ""}" href="day0${day.id}.html">
      <span class="outfit-dot" style="background:${outfitColor[day.outfit] || "#ccc"}"></span>
      <div class="num">${String(day.id).padStart(2, "0")}</div>
      <div class="date">${day.date.slice(5).replace("-", "/")}（${day.weekday}）</div>
      <h3>${day.title}</h3>
      <p>${day.summary}</p>
    </a>`;
  }).join("");
}

function renderIndexNextUp() {
  const el = document.querySelector("#next-up-widget");
  if (!el) return;
  const state = getTripState();

  let html = "";
  if (state.status === "before") {
    const daysLeft = Math.ceil((new Date(TRIP.tripStart) - new Date()) / 86400000);
    html = `
      <div class="next-up">
        <div class="pulse-dot"></div>
        <div>
          <div class="next-up-title">距離出發還有 ${daysLeft} 天</div>
          <div class="next-up-meta">10/25（日）9:45 樂桃航空 MM922 起飛</div>
        </div>
      </div>`;
  } else if (state.status === "after") {
    html = `
      <div class="next-up">
        <div class="pulse-dot" style="background:#4FA96B;box-shadow:none;animation:none"></div>
        <div>
          <div class="next-up-title">旅程已結束 🌺</div>
          <div class="next-up-meta">謝謝你，沖繩見！</div>
        </div>
      </div>`;
  } else {
    const s = state.stop;
    html = `
      <div class="next-up">
        <div class="pulse-dot"></div>
        <div>
          <div class="next-up-title">現在・${state.day.title}：${s ? s.title : ""}</div>
          <div class="next-up-meta">${state.nextStop ? "下一站：" + state.nextStop.title : "本日最後一站"}</div>
        </div>
      </div>
      <div class="btn-row" style="margin-top:14px">
        ${s && s.mapQuery ? `<button class="btn btn-outline btn-sm" data-map-query="${esc(s.mapQuery)}">🗺️ 目前地點地圖</button>` : ""}
        <a class="btn btn-outline btn-sm" href="day0${state.day.id}.html">查看${state.day.title}完整行程</a>
      </div>`;
  }
  el.innerHTML = html;
  initMapButtons(el);
}

/* ---------------- Hotel Page ---------------- */
function renderHotels() {
  const el = document.querySelector("#hotel-list");
  if (!el) return;
  el.innerHTML = TRIP.hotels.map(h => `
    <div class="hotel-card" id="${h.id}">
      <div class="card-media">
        <img src="${h.hero}" alt="${h.name}" loading="lazy" onerror="this.style.display='none'; this.parentElement.classList.add('img-fallback')">
        <div class="fallback-icon">🏨</div>
      </div>
      <div class="hotel-body">
        <h3>${h.name}</h3>
        <p class="type" style="color:var(--color-primary);font-weight:600;font-size:13px">${h.nights}</p>
        <div class="hotel-meta">
          <div><div class="meta-label">Check-in</div><div class="meta-value">${h.checkin}</div></div>
          <div><div class="meta-label">Check-out</div><div class="meta-value">${h.checkout}</div></div>
          <div><div class="meta-label">電話</div><div class="meta-value">${h.phone}</div></div>
          <div><div class="meta-label">停車</div><div class="meta-value">${h.parking}</div></div>
          <div style="grid-column:1/-1"><div class="meta-label">早餐</div><div class="meta-value">${h.breakfast}</div></div>
          ${h.note ? `<div style="grid-column:1/-1"><div class="meta-label">備註</div><div class="meta-value">${h.note}</div></div>` : ""}
        </div>
        <div class="stop-address">📍 ${h.address}</div>
        <div class="stop-actions">
          <button class="chip-btn" data-map-query="${esc(h.name)}">🗺️ 開啟地圖</button>
          <button class="chip-btn" data-nav-query="${esc(h.name)}">🧭 導航</button>
          <button class="chip-btn" data-copy-text="${esc(h.address)}">📋 複製地址</button>
          <a class="chip-btn" href="${h.website}" target="_blank" rel="noopener">🔗 官方網站</a>
          ${h.parkingUrl ? `<a class="chip-btn" href="${h.parkingUrl}" target="_blank" rel="noopener">🅿️ 停車資訊</a>` : ""}
          ${h.email ? `<a class="chip-btn" href="mailto:${h.email}">✉️ ${h.email}</a>` : ""}
        </div>
      </div>
    </div>
  `).join("");
  initMapButtons(el);
  initCopyButtons(el);
}

/* ---------------- Attractions Page ---------------- */
function renderParkingBlock(a) {
  if (!a.parking || !a.parking.length) return "";
  return `
    <div class="stop-note" style="border-left-color:var(--color-coral)">
      🅿️ 免費停車
      ${a.parking.map(p => `
        <div style="margin-top:8px">
          <div>${p.label}：${p.address}</div>
          <div class="card-actions" style="margin-top:4px">
            <button class="chip-btn" data-map-query="${esc(p.mapQuery)}">🗺️ 地圖</button>
            <button class="chip-btn" data-nav-query="${esc(p.mapQuery)}">🧭 導航</button>
            <button class="chip-btn" data-copy-text="${esc(p.address)}">📋 複製</button>
          </div>
        </div>
      `).join("")}
    </div>
  `;
}

function renderAttractions() {
  const el = document.querySelector("#attraction-grid");
  if (!el) return;
  el.innerHTML = TRIP.attractions.map(a => `
    <div class="card">
      <div class="card-media">
        <img src="${a.hero}" alt="${a.name}" loading="lazy" onerror="this.style.display='none'">
        <div class="fallback-icon">🏝️</div>
        <span class="day-tag">Day${a.day}</span>
      </div>
      <div class="card-body">
        <h3>${a.name}</h3>
        <div class="stay">⏱ ${a.stay}</div>
        ${a.note ? `<div class="note">${a.note}</div>` : ""}
        <div class="stop-address">📍 ${a.address}</div>
        ${renderParkingBlock(a)}
        <div class="card-actions">
          <button class="chip-btn" data-map-query="${esc(a.mapQuery)}">🗺️ 地圖</button>
          <button class="chip-btn" data-nav-query="${esc(a.mapQuery)}">🧭 導航</button>
          <button class="chip-btn" data-copy-text="${esc(a.address)}">📋 複製</button>
          ${a.website ? `<a class="chip-btn" href="${a.website}" target="_blank" rel="noopener">🔗 官網</a>` : ""}
        </div>
      </div>
    </div>
  `).join("");
  initMapButtons(el);
  initCopyButtons(el);
}

/* ---------------- Food Page ---------------- */
function renderFood() {
  const el = document.querySelector("#food-grid");
  if (!el) return;
  el.innerHTML = TRIP.food.map(f => `
    <div class="card">
      <div class="card-media">
        <img src="${f.hero}" alt="${f.name}" loading="lazy" onerror="this.style.display='none'">
        <div class="fallback-icon">🍽️</div>
        <span class="day-tag">Day${f.day}</span>
      </div>
      <div class="card-body">
        <h3>${f.name}</h3>
        <div class="type">${f.type || ""}</div>
        ${f.reservation ? `<div class="note">📅 訂位：${f.reservation}</div>` : ""}
        ${f.note ? `<div class="note">${f.note}</div>` : ""}
        <div class="stop-address">📍 ${f.address}</div>
        <div class="card-actions">
          <button class="chip-btn" data-map-query="${esc(f.mapQuery)}">🗺️ 地圖</button>
          <button class="chip-btn" data-nav-query="${esc(f.mapQuery)}">🧭 導航</button>
          <button class="chip-btn" data-copy-text="${esc(f.address)}">📋 複製</button>
          ${f.reservationUrl ? `<a class="chip-btn" href="${f.reservationUrl}" target="_blank" rel="noopener">🔗 訂位／菜單</a>` : ""}
        </div>
      </div>
    </div>
  `).join("");
  initMapButtons(el);
  initCopyButtons(el);
}

/* ---------------- Traffic Page ---------------- */
function renderTraffic() {
  const flightEl = document.querySelector("#flight-list");
  if (flightEl) {
    flightEl.innerHTML = TRIP.traffic.flights.map(f => `
      <div class="flight-card">
        <div>
          <span class="leg-badge">${f.leg}</span>
          <div class="route">${f.route}</div>
          <div class="flight-meta">${f.flight}　｜　${f.terminal}</div>
        </div>
        <div class="flight-time">
          <div class="big">${f.time}</div>
          <div class="flight-meta">${f.date}</div>
        </div>
      </div>
    `).join("");
  }

  const carEl = document.querySelector("#rental-car-block");
  if (carEl) {
    const c = TRIP.traffic.rentalCar;
    carEl.innerHTML = `
      <div class="widget-card">
        <h3>🚗 租車資訊　${c.company}</h3>
        <p style="font-size:14px;color:var(--color-text-muted)">${c.pickupInfo}</p>
        <div class="stop-address">📍 取還車地點：${c.pickupDropoff}</div>
        <div class="stop-note">${c.returnNote}</div>
        <div class="stop-actions">
          <button class="chip-btn" data-map-query="${esc(c.mapQuery)}">🗺️ 取車地點地圖</button>
          <button class="chip-btn" data-copy-text="${esc(c.pickupDropoff)}">📋 複製地址</button>
          <a class="chip-btn" href="${c.pickupUrl}" target="_blank" rel="noopener">🔗 機場接駁資訊</a>
          <button class="chip-btn" data-map-query="${esc(c.returnMapQuery)}">⛽ 加油站地圖</button>
        </div>
      </div>
    `;
    initMapButtons(carEl);
    initCopyButtons(carEl);
  }
}

/* ---------------- Medical Page ---------------- */
function renderMedical() {
  const m = TRIP.medical;
  if (!m) return;

  const emEl = document.querySelector("#emergency-block");
  if (emEl) {
    const e = m.emergency;
    emEl.innerHTML = `
      <div class="widget-card">
        <h3>🚨 ${e.title}</h3>
        <div class="hotel-meta" style="grid-template-columns:1fr 1fr">
          <div><div class="meta-label">一般電話</div><div class="meta-value">${e.general}</div></div>
          <div><div class="meta-label">${e.emergencyLabel}</div><div class="meta-value">${e.emergencyPhone}</div></div>
          <div><div class="meta-label">傳真</div><div class="meta-value">${e.fax}</div></div>
          <div><div class="meta-label">Email</div><div class="meta-value">${e.email}</div></div>
          <div style="grid-column:1/-1"><div class="meta-label">辦公時間</div><div class="meta-value">${e.hours}</div></div>
        </div>
        <div class="stop-address">📍 ${e.address}</div>
        <div class="stop-actions">
          <button class="chip-btn" data-map-query="${esc(e.mapQuery)}">🗺️ 地圖</button>
          <button class="chip-btn" data-nav-query="${esc(e.mapQuery)}">🧭 導航</button>
          <button class="chip-btn" data-copy-text="${esc(e.address)}">📋 複製地址</button>
          <a class="chip-btn" href="tel:${e.emergencyPhone.replace(/-/g,"")}">📞 撥打急難救助專線</a>
        </div>
      </div>`;
    initMapButtons(emEl);
    initCopyButtons(emEl);
  }

  const hygieneEl = document.querySelector("#hygiene-list");
  if (hygieneEl) hygieneEl.innerHTML = m.hygieneTips.map(t => `<li>${t}</li>`).join("");

  const illnessEl = document.querySelector("#illness-list");
  if (illnessEl) illnessEl.innerHTML = m.illnessSteps.map(t => `<li>${t}</li>`).join("");

  const medEl = document.querySelector("#medicine-table");
  if (medEl) {
    medEl.innerHTML = `
      <table class="med-table">
        <thead><tr><th>藥品名稱</th><th>適用症狀</th><th>使用年齡</th><th>備註</th></tr></thead>
        <tbody>
          ${m.medicines.map(x => `
            <tr>
              <td style="white-space:pre-line">${x.name}</td>
              <td>${x.symptoms}</td>
              <td>${x.age}</td>
              <td>${x.note}</td>
            </tr>`).join("")}
        </tbody>
      </table>`;
  }

  const termsEl = document.querySelector("#terms-table");
  if (termsEl) {
    termsEl.innerHTML = `
      <table class="med-table">
        <thead><tr><th>日文</th><th>中文意思</th></tr></thead>
        <tbody>
          ${m.terms.map(x => `<tr><td>${x.jp}</td><td>${x.zh}</td></tr>`).join("")}
        </tbody>
      </table>`;
  }

  const sitesEl = document.querySelector("#search-sites");
  if (sitesEl) {
    sitesEl.innerHTML = m.searchSites.map(s => `<a class="chip-btn" href="${s.url}" target="_blank" rel="noopener">🔗 ${s.label}</a>`).join("");
  }

  const hospEl = document.querySelector("#hospital-grid");
  if (hospEl) {
    hospEl.innerHTML = m.hospitals.map(h => `
      <div class="card">
        <div class="card-body">
          <h3 style="white-space:pre-line;font-size:15px">${h.name}</h3>
          <div class="type">支援語言：${h.lang}${h.emergency24 === true ? "　｜　24小時急診" : h.emergency24 === false ? "　｜　非24小時急診" : ""}</div>
          ${h.note ? `<div class="note">${h.note}</div>` : ""}
          <div class="stop-address">📍 ${h.address}</div>
          <div class="card-actions">
            <a class="chip-btn" href="${h.mapUrl}" target="_blank" rel="noopener">🗺️ Google Maps</a>
            <button class="chip-btn" data-copy-text="${esc(h.address)}">📋 複製地址</button>
            <a class="chip-btn" href="${h.website}" target="_blank" rel="noopener">🔗 官網</a>
          </div>
        </div>
      </div>
    `).join("");
    initCopyButtons(hospEl);
  }

  const hotlineEl = document.querySelector("#hotline-block");
  if (hotlineEl) {
    const h = m.hotline;
    hotlineEl.innerHTML = `
      <div class="widget-card">
        <h3>☎️ 免費醫療諮詢服務</h3>
        <p style="margin-bottom:6px"><a class="chip-btn" href="tel:${h.phone.replace(/-/g,"")}">📞 ${h.phone}</a></p>
        <p style="font-size:13.5px;color:var(--color-text-muted);margin-bottom:4px">支援語言：${h.lang}</p>
        <p style="font-size:13.5px;color:var(--color-text-muted);margin-bottom:0">${h.note}</p>
      </div>`;
  }
}

/* ---------------- Dispatch ---------------- */
function renderPage() {
  if (typeof PAGE_TYPE === "undefined") return;

  if (PAGE_TYPE === "index") {
    renderIndexDayGrid();
    renderIndexNextUp();
  }
  if (PAGE_TYPE === "day") {
    const day = TRIP.days.find(d => d.id === PAGE_DAY_ID);
    if (!day) return;
    renderDayHero(day);
    renderDayNav(day);
    renderTimeline(day);
  }
  if (PAGE_TYPE === "hotel") renderHotels();
  if (PAGE_TYPE === "attractions") renderAttractions();
  if (PAGE_TYPE === "food") renderFood();
  if (PAGE_TYPE === "traffic") renderTraffic();
  if (PAGE_TYPE === "medical") renderMedical();
}

function refreshCurrentState() {
  if (PAGE_TYPE === "day") {
    const day = TRIP.days.find(d => d.id === PAGE_DAY_ID);
    if (day) renderTimeline(day);
  }
  if (PAGE_TYPE === "index") {
    renderIndexDayGrid();
    renderIndexNextUp();
  }
}
