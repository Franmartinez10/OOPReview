import {MobileLibrary} from "./mobileLibrary"
import {Mobile} from "./claseMobile"

let nokia3210:Mobile = new Mobile("Nokia3210","3210","Nokia",16,"white",true,12,1200)
let iPhone3G:Mobile = new Mobile("iPhone3G","3G","Apple",128,"black",true,16,1300)
let samsung_Galaxy_10:Mobile = new Mobile("Samsung_Galaxy_10","Galaxy 10","Samsung",64,"purple",false,32,900)
let  honor:Mobile = new Mobile("Honor","pro","Huawei",24,"red",true,1,122)
let arraitoMobiles:Mobile[] = [nokia3210,iPhone3G,samsung_Galaxy_10,samsung_Galaxy_10,honor]
let libreriaMobiles:MobileLibrary = new MobileLibrary("PhoneHouse","Madrid",arraitoMobiles)

console.log(libreriaMobiles.totalPriceCalculation())