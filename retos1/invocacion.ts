
//invocando a la funcion isEven y a la funcion add creadas en los retos anteriores indicar si es par o impar la suma de os caracteres de cada uno de los siguientes arrays: 
//["Casa", "COche", "Ciudad", "Cesta"] 
//["Barco", "Baca", "Bicicleta", "Balon", "Bisiesto", "Brasil"] 
//["Venezuela", "Veneno", "Voltaje"]

import { isEven } from "./condicionales";
import { add } from "./buclesFor";

let array1: string[] = ["Casa", "COche", "Ciudad", "Cesta"];
let array2: string[] = ["Barco", "Baca", "Bicicleta", "Balon", "Bisiesto", "Brasil"];
let array3: string[] = ["Venezuela", "Veneno", "Voltaje"];
let sum1: number = add(array1);
let sum2: number = add(array2);
let sum3: number = add(array3);
console.log(`La suma de los caracteres del array1 es ${sum1} y es ${isEven(sum1) ? "par" : "impar"}`);
console.log(`La suma de los caracteres del array2 es ${sum2} y es ${isEven(sum2) ? "par" : "impar"}`);
console.log(`La suma de los caracteres del array3 es ${sum3} y es ${isEven(sum3) ? "par" : "impar"}`);

