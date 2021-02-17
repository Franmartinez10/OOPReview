"use strict";
exports.__esModule = true;
var ClaseMobile_1 = require("./ClaseMobile");
var Nokia3210 = new ClaseMobile_1.mobile("Nokia3210", "3210", "Nokia", 16, "white", true, 12, 1200);
var iPhone3G = new ClaseMobile_1.mobile("iPhone3G", "3G", "Apple", 128, "black", true, 16, 1300);
var Samsung_Galaxy_10 = new ClaseMobile_1.mobile("Samsung_Galaxy_10", "Galaxy 10", "Samsung", 64, "purple", false, 32, 900);
Nokia3210.is5G = true;
Nokia3210.cameraNumber = 5;
console.log(Nokia3210);
console.log(iPhone3G);
console.log(Samsung_Galaxy_10);
console.log(ClaseMobile_1.mobile);
