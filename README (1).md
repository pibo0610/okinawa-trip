# 沖繩自由行網站

10/25（日）～10/28（三）沖繩自由行完整攻略網站。純靜態網站（HTML/CSS/JS），無需任何後端或建置工具。

## 🚀 用 GitHub Pages 部署（推薦，永久網址）

1. 在 GitHub 建立一個新的 **Public Repository**（例如命名 `okinawa-trip`）
2. 把這個資料夾內「全部檔案」上傳到 Repository（網頁介面拖曳上傳即可，不需要指令）
   - 確保 `index.html` 是在 Repository 的**最外層**（根目錄），不要包在子資料夾裡
3. 到 Repository 上方 **Settings → Pages**
4. 「Source」選擇 `Deploy from a branch`，Branch 選 `main`，資料夾選 `/ (root)`，按 **Save**
5. 等待1–2分鐘，重新整理該頁面，會看到網址，格式類似：
   `https://你的帳號.github.io/okinawa-trip/`
6. 這個網址就可以分享給同行的朋友了！

之後如果要更新行程內容，只要修改 `assets/data.js` 重新上傳覆蓋，網址不會改變。

## 📁 檔案結構

```
index.html          首頁
day01.html ~ day04.html   每日行程
hotel.html           住宿
attractions.html     景點
food.html            美食
traffic.html         交通
medical.html         沖繩醫療
assets/
  style.css          共用樣式
  data.js            行程資料（要改行程內容只需要改這裡）
  render.js          頁面渲染邏輯
  main.js            互動功能（地圖、複製地址、匯率、Checklist、列印）
images/              景點/餐廳/飯店照片
```

## 🛠️ 之後如何自行修改行程

- 想改行程內容（時間、地址、備註）：只需要編輯 `assets/data.js`，不用碰HTML
- 想換照片：把新照片依照 `images/README.md` 內的檔名規則放進 `images/` 資料夾覆蓋即可
- 想改顏色或字體：編輯 `assets/style.css` 最上方的 `:root` 色彩變數

## 其他部署方式

- **Netlify Drop**（免帳號、最快）：https://app.netlify.com/drop ，把整個資料夾拖進去即可
- **Vercel**：vercel.com 註冊後用網頁拖放上傳
