import {Mobile} from "./ClaseMobile"
let Nokia3210:Mobile = new Mobile("Nokia3210","3210","Nokia",16,"white",true,12,1200)
let iPhone3G:Mobile = new Mobile("iPhone3G","3G","Apple",128,"black",true,16,1300)
let Samsung_Galaxy_10:Mobile = new Mobile("Samsung_Galaxy_10","Galaxy 10","Samsung",64,"purple",false,32,900)


Nokia3210.is5G = true;
Nokia3210.cameraNumber = 5;

console.log(Nokia3210)
console.log(iPhone3G)
console.log(Samsung_Galaxy_10)

console.log(mobile)