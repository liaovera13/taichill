// =========================
// 心情推薦
// =========================

function showRecommendation(type) {

    const text =
        document.getElementById("recommendation-text");

    const recommendations = {

        photo:
            "今天適合拍美照！推薦你去「高美濕地」看夕陽，或到「審計新村」逛逛特色小店 📸",

        coffee:
            "今天適合慢慢來 ☕ 可以到「審計新村」附近找間咖啡廳，享受一個悠閒午後。",

        date:
            "浪漫模式 ON 💕 推薦傍晚到「高美濕地」看夕陽，再一起吃個晚餐。",

        nature:
            "今天就先離開城市一下吧 🌳 推薦「大坑步道」，走走路、吹吹風，讓腦袋放空。"

    };

    text.innerText = recommendations[type];

}


// =========================
// 景點按鈕
// =========================

function showPlace(place) {

    alert(
        "📍 " + place +
        "\n\n這裡是 Taichill 推薦的台中景點！"
    );

}
