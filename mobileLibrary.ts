import {Mobile} from './claseMobile'
export class MobileLibrary
{
   private name:string;
   private location:string;
   private mobiles:Mobile[]
   private totalPrice:number;

   constructor(name:string,location:string,mobiles:Mobile[])
   {
    this.name = name;
    this.location = location;
    this.mobiles = mobiles;
    this.totalPrice = this.totalPriceCalculation()

   }
   public getName():string
   {
        return this.name;
   }
   public getLocation():string
   {
       return this.location
   }
   public getMobiles():Mobile[]
   {
       return this.mobiles;
   }
   public getTotalPrice():number
   {
       return this.totalPrice;
   }
   public setName(name:string)
   {
       this.name = name;
   }
   public setLocation(location:string)
   {
       this.location = location;
   }
   public setMobiles(mobiles:Mobile[])
   {
       this.mobiles = mobiles;
   }
   public setTotalPrice(totalPrice:number)
   {
       this.totalPrice = totalPrice;
   }
   
   private totalPriceCalculation():number
   { 
       let precioTotal:number = 0;
        for(let i=0;i<this.mobiles.length;i++)
        {
        
            precioTotal += this.mobiles[i].getPrice()
        
        }
        
        return precioTotal;
   }
   public printLibrary()
   {console.log("this is all my mobiles:")
        for(let i=0; i<this.mobiles.length;i++)
        {
            this.mobiles[i].getPrint()
        }
        console.log("Price overall: "+ this.totalPrice);
        
   }

} 


let nokia3210:Mobile = new Mobile("Nokia3210","3210","Nokia",16,"white",true,12,1200)
let iPhone3G:Mobile = new Mobile("iPhone3G","3G","Apple",128,"black",true,16,1300)
let samsung_Galaxy_10:Mobile = new Mobile("Samsung_Galaxy_10","Galaxy 10","Samsung",64,"purple",false,32,900)
let  honor:Mobile = new Mobile("Honor","pro","Huawei",24,"red",true,1,122)
let arraitoMobiles:Mobile[] = [nokia3210,iPhone3G,samsung_Galaxy_10,samsung_Galaxy_10,honor]
let libreriaMobiles:MobileLibrary = new MobileLibrary("PhoneHouse","Madrid",arraitoMobiles)

console.log(libreriaMobiles.getTotalPrice())

libreriaMobiles.printLibrary();
