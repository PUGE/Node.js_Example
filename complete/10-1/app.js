var express = require("express");
var path = require("path");
var app = express();
app.use(express.static(path.join(__dirname, "public")));
app.get("/photos.json", function(req, res) {
    res.json([
        [
            "images/image1.jpg",
            "台北電腦應用展開幕，參觀的民眾真的很多喔。"
        ],
        [
            "images/image2.jpg",
            "剛進大門口就好多人，擠的水洩不通。"
        ],
        [
            "images/image3.jpg",
            "大家趁電腦展撿便宜，詢問的人潮絡繹不絕。"
        ]
    ]);
});
app.listen(process.env.PORT || 3000);