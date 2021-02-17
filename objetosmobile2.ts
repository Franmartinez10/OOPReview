import{Mobile} from "./claseMobile"

let Nokia3210:Mobile = new Mobile("Nokia3210","3210","Nokia",16,"white",true,12,1200)
let iPhone3G:Mobile = new Mobile("iPhone3G","3G","Apple",128,"black",true,16,1300)
let Samsung_Galaxy_10:Mobile = new Mobile("Samsung_Galaxy_10","Galaxy 10","Samsung",64,"purple",false,32,900)
let arrayMobiles:Mobile[] = [Nokia3210, iPhone3G ,Samsung_Galaxy_10]

for(let i=0;i<arrayMobiles.length;i++)
{
    arrayMobiles[i].getPrint()
}

Nokia3210.setCameraNumber(4);
Nokia3210.setIs5g(true);

// Nokia3210.getPrint();
// iPhone3G.getPrint();
// Samsung_Galaxy_10.getPrint();