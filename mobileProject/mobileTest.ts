// Importar la clase Mobile
import { Mobile } from './mobile';

// Crear un nuevo objeto myMobile de la clase Mobile, y probar todos sus metodos.
let myMobile = new Mobile("iPhone", "Apple", "12 Pro", "Silver", 999);
console.log("Nombre del móvil: " + myMobile.getName());
console.log("Marca del móvil: " + myMobile.getTrademark());
console.log("Modelo del móvil: " + myMobile.getModel());
console.log("Color del móvil: " + myMobile.getColor());
console.log("Precio del móvil: " + myMobile.getPrice() + "€");
myMobile.setColor("Gold");
console.log("Nuevo color del móvil: " + myMobile.getColor());
myMobile.setPrice(1099);
console.log("Nuevo precio del móvil: " + myMobile.getPrice() + "€");

//Reto 2 añadir Nuevo Metodo

//Crear un nuevo metodo que imprima por consola todas las caracteristicas de la clase siguiendo el siguiente patron:

//"The characteristics of the mobile name are:"
//Name: name
//Trademark: trademark
//Model: model
//Color: color
//Price: price

myMobile.printAllCharacteristics();

//crear 3 objetos de la clase Mobile.
//crear un array llamado myMobiles que tendrá los 3 objetos creados en el punto anterior.
//Mostrar los datos de myMobiles invocando al metodo myMobile.printAllCharacteristics();

import { Mobile } from './mobile';

// Crear 3 objetos Mobile
let mobile1 = new Mobile("iPhone", "Apple", "12 Pro", "Silver", 999);
let mobile2 = new Mobile("Galaxy S21", "Samsung", "S21 Ultra", "Black", 1199);
let mobile3 = new Mobile("Pixel 7", "Google", "7 Pro", "White", 899);

// Crear array con los 3 objetos
let myMobiles: Mobile[] = [mobile1, mobile2, mobile3];

// Mostrar las características de cada móvil
for (let mobile of myMobiles) {
    mobile.printAllCharacteristics();
}










