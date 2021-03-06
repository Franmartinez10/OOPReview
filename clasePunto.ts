export class Punto
{
    private x:number;
    private y:number;
    
    constructor(x:number,y:number)
    {
        this.x = x;
        this.y = y;
    }
    public getX():number
    {
        return this.x
    }
    public getY():number
    {
        return this.y
    }
    public setY(y:number)
    {
        this.y = y;
    }
    public setX(x:number)
    {
        this.x= x;
    }
    public toStringg():string
    {
        return "("+this.x.toString()+ ","+ this.y.toString()+ ")" 
    }
    public distanciaAlOrigen():number
    {
        let distancia:number = 0 
        distancia =  Math.round(Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2)))
        return distancia;
    }
    public calcularDistancia(otroPunto:Punto):number
    {
        let distanciaa:number = 0 
        distanciaa =  Math.sqrt(Math.pow((otroPunto.x-this.x),2)+Math.pow((otroPunto.y-this.y),2))
        return distanciaa;   
    }
    public calcularCuadrante():number
    { let cuadrante:number;
        if((this.x=0)||(this.y=0))
        {
            cuadrante=0
        }
        else if((this.x>0)&&(this.y>0))
        {
            cuadrante = 1
        }
        else if((this.x<0)&&(this.y>0))
        {
            cuadrante = 2
        }
        else if((this.x<0)&&(this.y<0))
        {
            cuadrante = 3
        }
        else if((this.x>0)&&(this.y<0))
        {
            cuadrante = 4
        }
            return cuadrante;
    }
    public calcularMasCercano(puntos:Punto[]):Punto
    { let distancia:number = Number.MAX_VALUE
      let  distanciamascorta: Punto
        for(let i=0; i<puntos.length;i++)
        {
            if(this.calcularDistancia(puntos[i])<distancia)
            {
                distancia = this.calcularDistancia(puntos[i])
                distanciamascorta = puntos[i]
            }
            
      
        } return distanciamascorta
    }

}   


