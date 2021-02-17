import {Punto} from "./clasePunto"
import { Triangulo } from "./claseTriangulo"
let cordenaditas:Punto = new Punto(2,2)
console.log(cordenaditas.toStringg())
let otroPunto:Punto = new Punto(1,1)
let p1:Punto = new Punto(12,3)
let p2:Punto = new Punto(1,2)
let p3:Punto = new Punto(5,7)
let puntazos:Punto[] = [p1,p2]
let triangulito:Triangulo = new Triangulo(p1,p2,p3)

console.log(p1.distanciaAlOrigen())
console.log(cordenaditas.calcularDistancia(otroPunto))
console.log(p1.calcularMasCercano(puntazos))
console.log(triangulito.calcularLongitudLados())

