import {Punto} from "./clasePunto"
let cordenaditas:Punto = new Punto(2,2)
console.log(cordenaditas.toStringg())
let otroPunto:Punto = new Punto(1,1)
let p1:Punto = new Punto(12,3)
let p2:Punto = new Punto(1,2)
let puntazos:Punto[] = [p1,p2]
console.log(p1.distanciaAlOrigen())
console.log(cordenaditas.calcularDistancia(otroPunto))
console.log(p1.calcularMasCercano(puntazos))

