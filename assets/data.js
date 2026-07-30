/* =========================================================
   沖繩自由行 — 行程資料
   所有頁面共用這份資料來源，維護時只需改這裡。
   ========================================================= */

const TRIP = {
  tripStart: "2026-10-25",
  tripEnd: "2026-10-28",
  rentalCar: "OTS Rent-a-Car",

  days: [
    {
      id: 1,
      date: "2026-10-25",
      weekday: "日",
      title: "Day1",
      hotel: "Hotel Nikko Alivila（中部日航）",
      hotelPage: "hotel.html#nikko-alivila",
      summary: "抵達沖繩，先參拜波上宮，傍晚永旺AEON採買晚餐",
      outfit: "粉紅",
      meals: { breakfast: "機上／自理", lunch: "機場蘋果派／自理", dinner: "永旺AEON 來客夢店（藏壽司）" },
      hero: "images/day01-hero.webp",
      stops: [
        {
          time: "9:45", sortMinutes: 9 * 60 + 45,
          title: "抵達沖繩那霸機場",
          detail: "樂桃航空 MM922（A320）第1航廈｜9:45起飛　12:25抵達",
          transport: "租車公司機場接駁車",
          address: "取還車地點：OTS臨空豐崎營業所　3-37 Toyosaki, Tomigusuku, Okinawa 901-0225",
          mapQuery: "OTS臨空豐崎營業所 3-37 Toyosaki, Tomigusuku, Okinawa 901-0225",
          links: [{ label: "機場接駁資訊", url: "https://www.otsinternational.jp/otsrentacar/cn/okinawa/pickup/naha-airport-international/" }]
        },
        {
          time: "—", sortMinutes: 12 * 60 + 40,
          title: "機場買蘋果派 mille mele（ミレメーレ）或飯糰",
          detail: "✈️ミレメーレ‧那霸機場｜🚶‍➡️國際航廈出來後搭手扶梯上二樓，往國內線方向步行，櫃位鄰近無印良品｜🕒 09:00–17:00",
          transport: "—",
          address: "那霸機場 往P3立體停車場出入口手扶梯旁",
          mapQuery: "那霸機場",
          note: "⚠️ 只能現金付款"
        },
        {
          time: "14:00租車出發", sortMinutes: 14 * 60,
          title: "波上宮",
          detail: "停留約30分鐘",
          transport: "車程21分",
          address: "波上宮 一之鳥居前停車場　1 Chome-25-11 Wakasa, Naha, Okinawa 900-0031",
          mapQuery: "波上宮 1 Chome-25-11 Wakasa, Naha, Okinawa 900-0031",
          links: [{ label: "官方網站", url: "http://naminouegu.jp/" }]
        },
        {
          time: "—", sortMinutes: 15 * 60 + 30,
          title: "永旺AEON 來客夢店",
          detail: "停留約2小時｜✦晚餐：2樓藏壽司　✦逛3COINS",
          transport: "車程46分",
          address: "1番地 Raikamu, Kitanakagusuku, Nakagami District, Okinawa 901-2306",
          mapQuery: "AEON MALL Okinawa Rycom",
          note: "—永旺在AEON STYLE旁（收據抬頭上有AEON）\n—其他品牌在另一個櫃台（1樓 Village A區）BLUE SEAL旁邊轉角繞進去\n1F：3COINS、UNIQLO、GU、H&M、寶可夢中心、BicCamera藥妝、DAISO\n2F：PLAZA、GAP、NEW ERA、Global Work、久世福商店、AEON STYLE超市\n3F：BicCamera電器、SKECHERS、Crocs、flying tiger\n4F：三麗鷗商店、橡子共和國、BREEZE童裝、Mother Garden(木製玩具)、寶寶反斗城\n美食：Kijimuna塔可飯、藏壽司、拉麵魁力屋、串家物語、JUMBO STEAK HAN'S",
          links: [
            { label: "優惠券", url: "https://tw.aeonmall.global/mall/okinawarycom/coupons" },
            { label: "服務台500日圓折價券", url: "https://tw.aeonmall.global/coupons/discount?mall=mall52&couponid=22" }
          ]
        },
        {
          time: "—", sortMinutes: 18 * 60,
          title: "丸大超市 波平店（路過採買）",
          detail: "",
          transport: "車程42分",
          address: "1696 Namihira, Yomitan, Nakagami District, Okinawa 904-0322",
          mapQuery: "1696 Namihira, Yomitan, Nakagami District, Okinawa 904-0322",
          links: [{ label: "官方網站", url: "https://okinawa-marudai.co.jp/brunches/brunches-81/" }]
        },
        {
          time: "20:00 Check-in", sortMinutes: 20 * 60,
          title: "入住 Hotel Nikko Alivila",
          detail: "退房：~11:00｜停車每次1,000日圓（退房於前台出示停車票）",
          transport: "—",
          address: "600 Gima, Yomitan, Nakagami District, Okinawa 904-0393（沖繩縣中頭郡讀谷村字儀間600）｜電話 +81-98-982-9111",
          mapQuery: "Hotel Nikko Alivila",
          note: "早餐選擇：Brasserie \"Verdemar\"（西式）／Casual Buffet \"Hanahana\"（日式洋食）／Ryukyuan & Japanese Cuisine（和定食）",
          links: [{ label: "官方網站", url: "https://www.alivila.co.jp/en/" }]
        }
      ]
    },
    {
      id: 2,
      date: "2026-10-26",
      weekday: "一",
      title: "Day2",
      hotel: "Hotel Nikko Alivila（續住）",
      hotelPage: "hotel.html#nikko-alivila",
      summary: "上午玻璃獨木舟＋美麗海水族館看海豚海鯨鯊，下午古宇利大橋兜風",
      outfit: "藍色",
      meals: { breakfast: "飯店", lunch: "美麗海水族館4F自助餐廳「INOH」", dinner: "Yakiniku Kochan（燒肉）" },
      hero: "images/day02-hero.webp",
      stops: [
        { time: "7:00早餐 / 7:50出發", sortMinutes: 7 * 60, title: "飯店出發", detail: "", transport: "—", address: "—", mapQuery: "" },
        {
          time: "9:40", sortMinutes: 9 * 60 + 40,
          title: "透明船預約｜30分鐘玻璃獨木舟課程",
          detail: "瀨底島玻璃獨木舟之旅，安池海灘出發｜開始時間09:40／時長約1小時或更短",
          transport: "車程1小時20分",
          address: "集合地點 => 沖繩縣國頭郡本部町Sesoko 2631-1（沖繩縣國頭郡本部町瀨底，瀨底大橋橋下）",
          mapQuery: "沖繩縣國頭郡本部町Sesoko 2631-1",
          note: "停車：入口斜對面收費停車場約1,000日圓，周邊亦有部分空地可停",
          links: [{ label: "預約網站", url: "https://anchi-beach-oms-sesoko.com/marine-menu-rental/" }]
        },
        {
          time: "10:50出發（停留到15:30）", sortMinutes: 10 * 60 + 50,
          title: "美麗海水族館（戶外買海豚餵食券）",
          detail: "✦11:30海豚秀（11:45拍照）　✦15:00鯨鯊餵食　✦15:30海豚餵食　✦午餐：4樓「INOH」自助餐",
          transport: "車程10分",
          address: "424 Ishikawa, Motobu, Kunigami District, Okinawa 905-0206",
          mapQuery: "沖縄美ら海水族館",
          note: "海豚秀：10:30/11:30/13:00/15:00/17:00\n與海豚合照：11:45/13:15/15:15（每次約15分鐘）\n鯨鯊餵食：15:00/17:00\n海豚餵食：10:00/11:00/13:30/15:30（售完為止，戶外海豚潟湖）\n黑潮探險：9:00-10:45、17:30-18:15",
          links: [{ label: "官方網站", url: "https://churaumi.okinawa/" }]
        },
        {
          time: "—", sortMinutes: 16 * 60,
          title: "古宇利大橋",
          detail: "✦星巴克 名護21世紀之森公園（停留約1小時）　✦咖啡 Cafe t&c Toraku",
          transport: "車程36分",
          addresses: [
            { label: "星巴克 名護21世紀之森公園", address: "〒905-0011 Okinawa, Nago, Miyazato, 2-2-2", mapQuery: "星巴克 名護21世紀之森公園 Okinawa Nago Miyazato 2-2-2" },
            { label: "Cafe t&c Toraku", address: "1882-10 Kouri, Nakijin, Kunigami District, Okinawa 905-0406", mapQuery: "Cafe t&c Toraku 1882-10 Kouri, Nakijin, Kunigami District, Okinawa 905-0406" }
          ],
          mapQuery: "古宇利大橋"
        },
        {
          time: "—", sortMinutes: 18 * 60,
          title: "晚餐：Yakiniku Kochan（燒肉單點）",
          detail: "停留約2小時",
          transport: "車程25分",
          address: "1219-163 Biimata, Nago, Okinawa 905-0005",
          mapQuery: "Yakiniku Kochan Nago",
          note: "預約 10/26（一）18:15",
          links: [{ label: "訂位頁面", url: "https://tabelog.com/tw/okinawa/A4702/A470201/47012349/" }]
        },
        {
          time: "—", sortMinutes: 20 * 60 + 30,
          title: "返回 Hotel Nikko Alivila（連住）",
          detail: "",
          transport: "車程1小時",
          address: "600 Gima, Yomitan, Nakagami District, Okinawa 904-0393",
          mapQuery: "Hotel Nikko Alivila"
        }
      ]
    },
    {
      id: 3,
      date: "2026-10-27",
      weekday: "二",
      title: "Day3",
      hotel: "早上退房，換住那霸市區",
      hotelPage: "hotel.html#jrk-blossom-naha",
      summary: "退房後海灘放空，鐘乳石洞探險，午後琉球村、美國村逛街，晚上搬進那霸市中心",
      outfit: "白色",
      meals: { breakfast: "飯店", lunch: "定食或蕎麥麵（浜の家海鮮料理／崎濱製麺）", dinner: "美國村 The Calif Kitchen Okinawa" },
      hero: "images/day03-hero.webp",
      stops: [
        {
          time: "9:00早餐 / 11:00退房", sortMinutes: 9 * 60,
          title: "飯店外沙灘",
          detail: "",
          transport: "—",
          address: "—",
          mapQuery: "",
          note: "退房於前台出示停車票"
        },
        {
          time: "—", sortMinutes: 11 * 60 + 30,
          title: "CAVE OKINAWA鐘乳石",
          detail: "停留30分鐘",
          transport: "車程26分",
          address: "479-1 Ishikawa Kadekaru, Uruma, Okinawa 904-1114",
          mapQuery: "CAVE OKINAWA 479-1 Ishikawa Kadekaru, Uruma, Okinawa 904-1114",
          links: [{ label: "官方網站", url: "https://www.cave.okinawa/" }]
        },
        {
          time: "12:00午餐", sortMinutes: 12 * 60,
          title: "浜の家海鮮料理／崎濱製麺（兩間店）",
          detail: "停留約1.5小時",
          transport: "8分",
          addresses: [
            { label: "浜の家海鮮料理", address: "2097 Nakadomari, Onna, Kunigami District, Okinawa 904-0415", mapQuery: "浜の家海鮮料理 2097 Nakadomari, Onna, Kunigami District, Okinawa 904-0415" },
            { label: "崎濱製麺", address: "847 Yamada, Onna, Kunigami District, Okinawa 904-0416", mapQuery: "崎濱製麺 847 Yamada, Onna, Kunigami District, Okinawa 904-0416" }
          ],
          note: "炸豬腳、海膽焗烤龍蝦（半隻龍蝦）4,290日圓",
          links: [{ label: "浜の家菜單", url: "https://www.kaisen-hamanoya.jp/food#nav06" }]
        },
        {
          time: "—", sortMinutes: 14 * 60,
          title: "琉球村",
          detail: "營業到17:00｜✦14:00太鼓舞表演，Kijimuna劇場（きじむなぁ劇場）　✦14:30石獅子彩繪(門口)｜停留約1小時",
          transport: "4分",
          address: "1130 Yamada, Onna, Kunigami District, Okinawa 904-0416",
          mapQuery: "琉球村",
          note: "石獅子彩繪2隻：4,200日圓",
          links: [
            { label: "官方網站", url: "https://www.ryukyumura.co.jp/" },
            { label: "石獅子彩繪預約", url: "https://book.ryukyumura.co.jp/products/84f78ba7-5a9f-5a50-a344-c9a253076ab6?lng=ja-JP" }
          ]
        },
        {
          time: "16:00", sortMinutes: 16 * 60,
          title: "Araha Park 安良波公園（海盜船）",
          detail: "停留約1小時",
          transport: "車程30分",
          address: "2-21 Chatan, Nakagami District, Okinawa 904-0116",
          mapQuery: "Araha Park 2-21 Chatan, Nakagami District, Okinawa 904-0116"
        },
        {
          time: "—", sortMinutes: 17 * 60 + 30,
          title: "美國村（逛街／晚餐）",
          detail: "停留約2.5小時｜✦晚餐：The Calif Kitchen Okinawa 3樓（Taco Rice／鬆餅，有海景）",
          transport: "車程3分",
          address: "Mihama, Chatan, Nakagami District, Okinawa 904-0115",
          mapQuery: "美國村 American Village Okinawa",
          note: "預約 10/27（二）17:30｜永旺 北谷店：玩具店在2樓 VILLAGE VANGUARD",
          links: [{ label: "訂位頁面", url: "https://tabelog.com/tw/okinawa/A4703/A470304/47019840/" }]
        },
        {
          time: "20:00 Check-in", sortMinutes: 20 * 60,
          title: "換飯店：JR九州Blossom那霸酒店",
          detail: "可加購早餐",
          transport: "車程1小時",
          address: "2-16-1 Makishi, Naha, Okinawa 900-0013（那霸市牧志2丁目16番1號）｜電話 +81-98-861-8700",
          mapQuery: "JR九州Blossom那霸酒店",
          note: "退房：~11:00｜加購早餐成人2,640日圓 x2\n停車每晚1,500日圓（住宿期間可無限次進出）\n飯店主入口位於置屋通（Okiei-dori），可於此卸行李",
          links: [
            { label: "官方網站", url: "https://www.jrk-hotels.co.jp/tw/Naha/" },
            { label: "停車資訊", url: "https://www.jrk-hotels.co.jp/Naha/access/#lnk_parking" }
          ]
        }
      ]
    },
    {
      id: 4,
      date: "2026-10-28",
      weekday: "三",
      title: "Day4",
      hotel: "早餐9:30前結束，回台",
      hotelPage: "hotel.html#jrk-blossom-naha",
      summary: "國際通市場採買午餐，還車後接駁機場，搭機返台",
      outfit: "粉紅",
      meals: { breakfast: "飯店（9:30前）", lunch: "國際通市場", dinner: "機上／自理" },
      hero: "images/day04-hero.webp",
      stops: [
        { time: "9:00早餐 / 10:00退房", sortMinutes: 9 * 60, title: "飯店退房", detail: "", transport: "—", address: "—", mapQuery: "" },
        {
          time: "—", sortMinutes: 10 * 60 + 30,
          title: "國際通（牧志市場）",
          detail: "停留約1.5小時，午餐在市場",
          transport: "走路逛街",
          address: "—",
          mapQuery: "國際通 那霸"
        },
        {
          time: "13:00", sortMinutes: 13 * 60,
          title: "還車：OTS臨空豐崎營業所（那霸機場）",
          detail: "需加滿油",
          transport: "車程35分",
          addresses: [
            { label: "OTS臨空豐崎營業所（還車）", address: "3-37 Toyosaki, Tomigusuku, Okinawa 901-0225", mapQuery: "OTS臨空豐崎營業所 3-37 Toyosaki, Tomigusuku, Okinawa 901-0225" },
            { label: "ENEOS加油站 豐崎店", address: "3-40 Toyosaki, Tomigusuku, Okinawa 901-0225", mapQuery: "ENEOS加油站 豐崎店 3-40 Toyosaki, Tomigusuku, Okinawa 901-0225" }
          ]
        },
        { time: "13:50", sortMinutes: 13 * 60 + 50, title: "接駁車前往機場", detail: "", transport: "—", address: "—", mapQuery: "" },
        {
          time: "16:50起飛　17:35抵達", sortMinutes: 16 * 60 + 50,
          title: "搭機返回台灣",
          detail: "樂桃航空 MM929（A320）",
          transport: "—",
          address: "—",
          mapQuery: "",
          note: "4樓貴賓休息室\n那霸機場 往P3立體停車場出入口手扶梯旁\n✈️ミレメーレ‧那霸機場\n🚶‍➡️國際航廈出來後搭手扶梯上二樓，往國內線方向步行，櫃位鄰近無印良品\n🕒 09:00–17:00"
        }
      ]
    }
  ],

  hotels: [
    {
      id: "nikko-alivila",
      name: "Hotel Nikko Alivila（中部日航）",
      nights: "10/25（日）～10/27（二）　連住2晚",
      checkin: "20:00 Check-in",
      checkout: "退房 ~11:00",
      address: "600 Gima, Yomitan, Nakagami District, Okinawa 904-0393（沖繩縣中頭郡讀谷村字儀間600）",
      phone: "+81-98-982-9111",
      parking: "每次1,000日圓（退房於前台出示停車票）",
      breakfast: "Brasserie \"Verdemar\"（西式）／Casual Buffet \"Hanahana\"（日式洋食）／Ryukyuan & Japanese Cuisine（和定食）",
      website: "https://www.alivila.co.jp/en/",
      email: "yoyaku@alivila.co.jp",
      hero: "images/hotel-nikko-alivila.webp"
    },
    {
      id: "jrk-blossom-naha",
      name: "JR九州Blossom那霸酒店",
      nights: "10/27（二）～10/28（三）　1晚",
      checkin: "20:00 Check-in",
      checkout: "退房 ~11:00",
      address: "2-16-1 Makishi, Naha, Okinawa 900-0013（那霸市牧志2丁目16番1號）",
      phone: "+81-98-861-8700",
      parking: "每晚1,500日圓（住宿期間可無限次進出）",
      breakfast: "可加購早餐，成人2,640日圓 x2",
      note: "飯店主入口位於置屋通（Okiei-dori），可於此卸行李",
      website: "https://www.jrk-hotels.co.jp/tw/Naha/",
      parkingUrl: "https://www.jrk-hotels.co.jp/Naha/access/#lnk_parking",
      email: "naha@jrk-hotels.co.jp",
      hero: "images/hotel-jrk-blossom.webp"
    }
  ],

  attractions: [
    { day: 1, name: "波上宮", stay: "約30分鐘", address: "波上宮 一之鳥居前停車場　1 Chome-25-11 Wakasa, Naha, Okinawa 900-0031", mapQuery: "波上宮 Naminoue Shrine", website: "http://naminouegu.jp/", hero: "images/naminoue-shrine.webp", note: "" },
    { day: 2, name: "美麗海水族館", stay: "停留到15:30", address: "424 Ishikawa, Motobu, Kunigami District, Okinawa 905-0206", mapQuery: "沖縄美ら海水族館", website: "https://churaumi.okinawa/", hero: "images/churaumi-aquarium.webp", note: "海豚秀：10:30/11:30/13:00/15:00/17:00｜鯨鯊餵食：15:00/17:00" },
    { day: 2, name: "瀨底島 玻璃獨木舟", stay: "約1小時", address: "沖繩縣國頭郡本部町瀨底（瀨底大橋橋下）", mapQuery: "沖繩縣國頭郡本部町Sesoko 2631-1", website: "https://anchi-beach-oms-sesoko.com/marine-menu-rental/", hero: "images/sesoko-kayak.webp", note: "9:40出發，30分鐘課程" },
    { day: 2, name: "古宇利大橋", stay: "自由停留", address: "沖繩縣國頭郡今歸仁村古宇利", mapQuery: "古宇利大橋", website: "", hero: "images/kouri-bridge.webp", note: "沿途星巴克、Cafe t&c Toraku" },
    { day: 3, name: "CAVE OKINAWA鐘乳石", stay: "約30分鐘", address: "479-1 Ishikawa Kadekaru, Uruma, Okinawa 904-1114", mapQuery: "CAVE OKINAWA 479-1 Ishikawa Kadekaru, Uruma, Okinawa 904-1114", website: "https://www.cave.okinawa/", hero: "images/cave-okinawa.webp", note: "" },
    { day: 3, name: "琉球村", stay: "約1小時", address: "1130 Yamada, Onna, Kunigami District, Okinawa 904-0416", mapQuery: "琉球村", website: "https://www.ryukyumura.co.jp/", hero: "images/ryukyu-mura.webp", note: "14:00太鼓舞表演｜石獅子彩繪體驗4,200日圓" },
    { day: 3, name: "Araha Park 安良波公園", stay: "約1小時", address: "2-21 Chatan, Nakagami District, Okinawa 904-0116", mapQuery: "Araha Park 2-21 Chatan, Nakagami District, Okinawa 904-0116", website: "", hero: "images/araha-park.webp", note: "海盜船遊具，適合親子",
      parking: [
        { label: "安良波公園 中央の駐車場", address: "2 Chome-21 Chatan, Nakagami District, Okinawa 904-0116", mapQuery: "安良波公園 中央駐車場 2 Chome-21 Chatan, Nakagami District, Okinawa 904-0116" }
      ]
    },
    { day: 3, name: "美國村", stay: "約2.5小時", address: "Mihama, Chatan, Nakagami District, Okinawa 904-0115", mapQuery: "美國村 American Village Okinawa", website: "", hero: "images/american-village.webp", note: "逛街＋海景晚餐",
      parking: [
        { label: "Depot Island 停車場（最近）", address: "8Q84+G3 北谷町 日本沖繩縣", mapQuery: "8Q84+G3 北谷町 沖繩縣" },
        { label: "北谷町美濱公共停車場（好停）", address: "8Q75+X5 北谷町 日本沖繩縣", mapQuery: "8Q75+X5 北谷町 沖繩縣" },
        { label: "AEON 北谷店停車場（最空）", address: "8Q75+J4 北谷町 日本沖繩縣", mapQuery: "8Q75+J4 北谷町 沖繩縣" }
      ]
    },
    { day: 4, name: "國際通（牧志市場）", stay: "約1.5小時", address: "那霸市牧志　國際通", mapQuery: "國際通 那霸", website: "", hero: "images/kokusai-street.webp", note: "沖繩最熱鬧的商店街，午餐在市場解決" }
  ],

  food: [
    { day: 1, name: "藏壽司（永旺AEON 2F）", type: "迴轉壽司", address: "1番地 Raikamu, Kitanakagusuku, Nakagami District, Okinawa 901-2306", mapQuery: "藏壽司 AEON MALL Okinawa Rycom", reservation: "", hero: "images/kurazushi.webp" },
    { day: 2, name: "INOH（美麗海水族館 4F）", type: "自助餐廳", address: "424 Ishikawa, Motobu, Kunigami District, Okinawa 905-0206", mapQuery: "沖縄美ら海水族館 INOH", reservation: "", hero: "images/inoh-buffet.webp" },
    { day: 2, name: "Yakiniku Kochan", type: "燒肉單點", address: "1219-163 Biimata, Nago, Okinawa 905-0005", mapQuery: "Yakiniku Kochan Nago", reservation: "10/26（一）18:15", reservationUrl: "https://tabelog.com/tw/okinawa/A4702/A470201/47012349/", hero: "images/yakiniku-kochan.webp" },
    { day: 3, name: "浜の家海鮮料理", type: "海鮮料理", address: "2097 Nakadomari, Onna, Kunigami District, Okinawa 904-0415", mapQuery: "浜の家海鮮料理 2097 Nakadomari, Onna, Kunigami District, Okinawa 904-0415", reservation: "", note: "炸豬腳、海膽焗烤龍蝦（半隻龍蝦）4,290日圓", reservationUrl: "https://www.kaisen-hamanoya.jp/food#nav06", hero: "images/hamanoya.webp" },
    { day: 3, name: "崎濱製麺", type: "蕎麥麵", address: "847 Yamada, Onna, Kunigami District, Okinawa 904-0416", mapQuery: "崎濱製麺 847 Yamada, Onna, Kunigami District, Okinawa 904-0416", reservation: "", hero: "images/sakihama-noodles.webp" },
    { day: 3, name: "The Calif Kitchen Okinawa", type: "美式／夏威夷風，Taco Rice／鬆餅", address: "美國村 3樓　Mihama, Chatan, Nakagami District, Okinawa 904-0115", mapQuery: "The Calif Kitchen Okinawa American Village", reservation: "10/27（二）17:30", reservationUrl: "https://tabelog.com/tw/okinawa/A4703/A470304/47019840/", hero: "images/calif-kitchen.webp" },
    { day: 4, name: "國際通牧志市場", type: "市場小吃", address: "那霸市牧志　國際通", mapQuery: "牧志公設市場", reservation: "", hero: "images/kokusai-street.webp" }
  ],

  traffic: {
    flights: [
      { leg: "去程", flight: "樂桃航空 MM922（A320）", route: "台灣 → 沖繩那霸", terminal: "第1航廈", time: "9:45起飛　12:25抵達", date: "10/25（日）" },
      { leg: "回程", flight: "樂桃航空 MM929（A320）", route: "沖繩那霸 → 台灣", terminal: "4樓貴賓休息室", time: "16:50起飛　17:35抵達", date: "10/28（三）" }
    ],
    rentalCar: {
      company: "OTS Rent-a-Car",
      pickupDropoff: "OTS臨空豐崎營業所（那霸機場）　3-37 Toyosaki, Tomigusuku, Okinawa 901-0225",
      mapQuery: "OTS臨空豐崎營業所 3-37 Toyosaki, Tomigusuku, Okinawa 901-0225",
      pickupInfo: "抵達機場後搭乘租車公司接駁車前往營業所取車",
      pickupUrl: "https://www.otsinternational.jp/otsrentacar/cn/okinawa/pickup/naha-airport-international/",
      returnNote: "還車前需加滿油",
      returnMapQuery: "ENEOS加油站 豐崎店 3-40 Toyosaki, Tomigusuku, Okinawa 901-0225"
    }
  },

  medical: {
    emergency: {
      title: "台北駐日經濟文化代表處那霸分處",
      general: "+81-98-862-7008",
      emergencyPhone: "+81-80-8056-0122",
      emergencyLabel: "急難救助專線（車禍、搶劫等生命安危情況）",
      address: "日本沖繩縣那霸市久茂地3-15-9 阿爾特大樓6樓（アルテビル那覇6階）",
      fax: "+81-98-862-7016",
      email: "tecooka@mofa.gov.tw",
      hours: "週一至週五 09:00–12:00、13:00–18:00（領務櫃台採全面預約制，需先電話或email預約）",
      mapQuery: "台北駐日經濟文化代表處那霸分處"
    },
    hygieneTips: [
      "保持衛生：勤洗手，使用消毒劑，避免觸摸臉部",
      "戴口罩：在公共場所或人多的地方配戴口罩，減少感染風險",
      "避免密集場所：盡量避開人群密集的地方，降低接觸病毒的機會"
    ],
    illnessSteps: [
      "休息：盡量避免外出，留在酒店休息，幫助身體恢復",
      "補充水分：多喝水，防止脫水",
      "藥物：可服用退燒藥或止痛藥緩解症狀，請依說明書或藥師建議使用",
      "保持衛生：勤洗手，咳嗽或打噴嚏時用紙巾或手肘遮擋，避免傳染他人",
      "戴口罩：外出或與他人接觸時配戴口罩，減少傳播風險",
      "就醫：症狀嚴重（高燒不退、呼吸困難等）建議盡快就醫",
      "聯絡酒店：告知酒店情況，他們可能提供協助或建議附近醫療機構",
      "保險：如有旅遊保險，請確認是否涵蓋醫療費用，並聯絡保險公司了解理賠流程"
    ],
    medicines: [
      { name: "大正百保能\nパブロンゴールドＡ", symptoms: "咳嗽、咳痰、喉嚨痛、打噴嚏、流鼻水、鼻塞、發冷、發燒、頭痛、關節痛、肌肉痛", age: "12歲以上", note: "藥力較強，有粉狀和藥丸可選" },
      { name: "EVE THREE SHOT Premium\nイブスリーショットプレミアム", symptoms: "頭痛、肩膀僵硬、牙痛、經痛、喉嚨痛、關節痛、肌肉痛、神經痛、腰痛、拔牙後疼痛、跌打損傷、耳痛、骨折/扭傷/外傷疼痛、寒顫發燒緩解", age: "15歲以上", note: "含布洛芬＋乙醯胺酚2種鎮痛解熱成分，網路推薦" },
      { name: "獅王 BUFFERIN 兒童用退燒藥\n小児用バファリン チュアブル", symptoms: "發冷發燒、牙痛、拔牙後疼痛、頭痛、跌打損傷、喉嚨痛、耳痛、關節痛、神經痛、腰痛、肌肉痛、肩周炎、骨折/扭傷疼痛、月經痛、外傷", age: "3–15歲", note: "小顆藥丸，可直接咀嚼服用" },
      { name: "獅王兒童BUFFERIN綜合感冒糖漿\nライオン キッズバファリンかぜシロップS", symptoms: "流鼻水、鼻塞、打噴嚏、喉嚨痛、咳嗽、喀痰、發冷、發燒、頭痛、關節痛、肌肉痛", age: "3個月–6歲", note: "適合尚不能吃藥丸的幼兒" }
    ],
    terms: [
      { jp: "はつねつ(発熱) / ねつ(熱)", zh: "發燒" },
      { jp: "せき(咳)", zh: "咳嗽" },
      { jp: "のどのいたみ(のどの痛み)", zh: "喉嚨痛" },
      { jp: "かぜ(風邪)", zh: "感冒" },
      { jp: "そうごうかぜぐすり(総合風邪薬)", zh: "綜合感冒藥" },
      { jp: "はなみず(鼻水)", zh: "流鼻涕" },
      { jp: "くしゃみ", zh: "打噴嚏" },
      { jp: "はなづまり(鼻づまり)", zh: "鼻塞" },
      { jp: "ずつう(頭痛)", zh: "頭痛" }
    ],
    searchSites: [
      { label: "沖繩縣內提供外語服務的醫療機構", url: "https://kokusai.oihf.or.jp/medicalinfo/" },
      { label: "日本本島接診外國患者的醫療機構", url: "https://jmip.jme.or.jp/search.php" }
    ],
    hospitals: [
      { name: "中部徳洲会病院\nChubu Tokushukai Hospital", website: "https://www.cyutoku.or.jp/", mapUrl: "https://maps.app.goo.gl/LBeRnh72aUPes5ZN6", address: "沖縄県中頭郡北中城村比嘉801番地", lang: "英文、中文", emergency24: true, note: "全年365天24小時視訊通話，可用語言：英/中/韓/西/葡" },
      { name: "南部徳洲会病院\nSouthern Tokushukai Hospital", website: "https://www.nantoku.org/", mapUrl: "https://maps.app.goo.gl/YAQRZ1v4sgMFpYiW6", address: "島尻郡八重瀬町字外間171番地1", lang: "英文、中文", emergency24: true, note: "小兒科在平日晚間(18:00-9:00)、週六及國定假日休診；外語翻譯時間：平日8:30-17:00，週六8:30-12:00" },
      { name: "浦添総合病院\nUrasoe General Hospital", website: "https://jin-aikai.com/urasoe/", mapUrl: "https://maps.app.goo.gl/1jcAsKzDQP7VhTMW7", address: "浦添市前田1丁目56番1号", lang: "英文、中文", emergency24: false, note: "可透過電話和視訊醫療口譯服務提供外語支援" },
      { name: "もとぶ野毛病院\nMotobu Noge Hospital", website: "https://www.noge.or.jp/", mapUrl: "https://maps.app.goo.gl/V7AVhkK24fBUjmV57", address: "本部町字大浜880-1", lang: "英文、中文", emergency24: false, note: "" },
      { name: "琉球大学病院\nUniversity of the Ryukyus Hospital", website: "https://communit.skr.u-ryukyu.ac.jp/", mapUrl: "https://maps.app.goo.gl/38KJWcp2PZEvZEjM7", address: "宜野湾市字喜友名1076番地", lang: "英文、中文", emergency24: false, note: "外國人翻譯視訊服務僅平日9:00-18:00提供" },
      { name: "牧港中央病院\nMakiminato Chuo Hospital", website: "https://haku-ai.or.jp/", mapUrl: "https://maps.app.goo.gl/wbkGDQY4m4cxpdCa6", address: "浦添市牧港1199", lang: "英文、中文（國語及廣東話）", emergency24: false, note: "沒有小兒科" },
      { name: "同仁病院\nDoujin Hospital", website: "http://www.yaese.or.jp/doujin/", mapUrl: "https://maps.app.goo.gl/t7GiDs77zPrVEwzn6", address: "浦添市城間1-37-12", lang: "英文、中文", emergency24: false, note: "兩種語言服務時間不同，請查官網／可能需事前致電" },
      { name: "沖縄協同病院\nOkinawa Kyodo Hospital", website: "https://oki-kyo.jp/", mapUrl: "https://maps.app.goo.gl/YHQh6WZT2RAoCeTE6", address: "沖縄県那覇市古波蔵4丁目10−55", lang: "英文", emergency24: true, note: "" },
      { name: "北部地区医師会病院\nNorthern Okinawa Medical Center", website: "https://hokubuishikai.com/", mapUrl: "https://maps.app.goo.gl/6ewEsLNnGTe4PeWR7", address: "名護市字宇茂佐1712-3", lang: "英文", emergency24: null, note: "沒有小兒科" },
      { name: "沖縄県立南部医療センター・こども医療センター\nOkinawa Prefectural Nanbu Medical Center & Children's Medical Center", website: "https://nanbuweb.hosp.pref.okinawa.jp/", mapUrl: "https://maps.app.goo.gl/XvHQSJWXpgGFk1YW9", address: "南風原町字新川118-1", lang: "英文", emergency24: false, note: "" }
    ],
    hotline: {
      phone: "0570-050-235",
      lang: "英語、中文（國語、粵語）等18種語言",
      note: "駐院護理師會詢問症狀、提供診所建議及相關資訊"
    }
  },

  checklist: [
    { group: "證件與金錢", items: ["護照（效期6個月以上）", "日幣現金", "信用卡", "駕照（日文譯本／國際駕照）", "電子機票、飯店訂房確認信", "海外旅遊保險保單"] },
    { group: "3C與充電", items: ["手機、充電線、行動電源", "萬用轉接頭（日本為A型）", "相機、記憶卡", "車用手機架"] },
    { group: "衣物與防曬", items: ["各日對應衣服顏色（Day1粉紅／Day2藍／Day3白／Day4粉紅）", "泳裝、快乾毛巾（水族館、玻璃獨木舟）", "防曬乳、太陽眼鏡、帽子", "薄外套（room冷氣／室內較涼）"] },
    { group: "健康與藥品", items: ["常備藥（感冒藥、腸胃藥、暈車藥）", "個人慢性病用藥", "口罩、消毒用品", "OK繃"] },
    { group: "出發前確認", items: ["租車保險與駕照文件備妥", "餐廳訂位再次確認（Yakiniku Kochan、Calif Kitchen）", "透明船／玻璃獨木舟活動再次確認", "手機下載Google地圖離線地圖／匯率App", "行李秤重，確認托運/手提限重"] }
  ]
};
