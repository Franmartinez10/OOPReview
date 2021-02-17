export class Mobile
{
    private name:string;
    private model:string;
    private trademark:string;
    private sdsize:number;
    private color:string;
    private is5G:boolean;
    private cameraNumber:number;
    private price:number;

    constructor(name:string,model:string,trademark:string,sdsize:number,color:string,is5G:boolean,cameraNumber:number,price:number)
    {
        this.name = name;
        this.model = model;
        this.model = trademark;
        this.sdsize = sdsize;
        this.color = color;
        this.is5G = is5G;
        this.cameraNumber = cameraNumber;
        this.price = price;
    }
    public getName():string
    {
        return this.name;
    }
    public getModel():string
    {
        return this.model;
    }
    public getTradeMark():string
    {
        return this.trademark;
    }
    public getSdsize():number
    {
        return this.sdsize;
    }
    public getColor():string
    {
        return this.color;
    }
    public getIs5g():boolean
    {
        return this.is5G;
    }
    public getCameraNumber():number
    {
        return this.cameraNumber;
    }
    public getPrice():number
    {
        return this.price;
    }
    public setName(name:string)
    {
        this.name = name;
    }
    public setModel(model:string)
    {
        this.model = model;
    }
    public setTradeMark(trademark:string)
    {
        this.trademark = trademark;
    }
    public setSdsize(sdsize:number)
    {
        this.sdsize = sdsize;
    }
    public setColor(color:string)
    {
        this.color = color;
    }
    public setIs5g(is5g:boolean)
    {
        this.is5G = is5g;
    }
    public setCameraNumber(cameraNumber:number)
    {
        this.cameraNumber = cameraNumber;
    }
    public setPrice(price:number)
    {
        this.price = price
    }

    public getPrint()
    {
        console.log
        (
            "The characteristics of the mobile" + this.name + " are:" + "\n" +
            "  *  Name: "+this.name +"\n" +
            "  *  Model: "+this.model +"\n" +
            "  *  TradeMark: "+this.trademark +"\n" +
            "  *  SD Size (GB): "+this.sdsize +"\n" +
            "  *  Color: "+this.color +"\n" +
            "  *  Is 5g?: "+this.is5G +"\n" +
            "  *  Number of Cameras: "+this.cameraNumber +"\n" 
        )
    }
    



    
}