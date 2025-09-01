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


