"use strict";
exports.__esModule = true;
var claseMobile_1 = require("./claseMobile");
var Nokia3210 = new claseMobile_1.Mobile("Nokia3210", "3210", "Nokia", 16, "white", true, 12, 1200);
var iPhone3G = new claseMobile_1.Mobile("iPhone3G", "3G", "Apple", 128, "black", true, 16, 1300);
var Samsung_Galaxy_10 = new claseMobile_1.Mobile("Samsung_Galaxy_10", "Galaxy 10", "Samsung", 64, "purple", false, 32, 900);
var arrayMobiles = [Nokia3210, iPhone3G, Samsung_Galaxy_10];
for (var i = 0; i < arrayMobiles.length; i++) {
    arrayMobiles[i].getPrint();
}
Nokia3210.setCameraNumber(4);
Nokia3210.setIs5g(true);
// Nokia3210.getPrint();
// iPhone3G.getPrint();
// Samsung_Galaxy_10.getPrint();
