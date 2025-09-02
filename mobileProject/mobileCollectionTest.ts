//Importar la clase MobileCollection.
//Crear 4 objetos de la clase Mobile y un array que los contenga.
//Crear un objeto myCollection de la clase MobileCOllection, asignarle el array que hemos creado previamente y comprobar todos sus metodos.
//Crear un metodo privado llamado totalPriceCalculation sin parametros de entrada, que te calcule el precio total de la coleccion.
//NOTA: Debe realizar la suma de los precios de todos los objetos almacenados en el atributo mobiles.
//En el constructor llamar totalPriceCalculation y guardarlo en su atributo correspondiente.
//Probar de nuevo el método getPrice de la clase en el fichero mobileCollectionTest.ts

import { Mobile } from "./mobile";
import { MobileCollection } from "./mobileCollection";

// Creamos 4 móviles
let mobile1 = new Mobile("iPhone", "Apple", "12 Pro", "Silver", 999);
let mobile2 = new Mobile("Galaxy", "Samsung", "S22", "Black", 899);
let mobile3 = new Mobile("Pixel", "Google", "7 Pro", "White", 799);
let mobile4 = new Mobile("Xiaomi 13", "Xiaomi", "13", "Blue", 699);

// Creamos un array con los móviles
let myMobiles: Mobile[] = [mobile1, mobile2, mobile3, mobile4];

// Creamos el objeto myCollection
let myCollection = new MobileCollection(myMobiles);

// --- Probar métodos ---
console.log("=== Lista de móviles ===");
console.log(myCollection.getMobiles());

console.log("=== Precio total de la colección ===");
console.log(myCollection.getTotalPrice());

// Probamos que al cambiar la colección, se recalcula el precio
myCollection.setMobiles([mobile1, mobile4]);

console.log("=== Nueva lista de móviles ===");
console.log(myCollection.getMobiles());

console.log("=== Nuevo precio total ===");
console.log(myCollection.getTotalPrice());

// --- Probar el nuevo método printCollection ---
console.log("=== Probando printCollection ===");
myCollection.printCollection();



