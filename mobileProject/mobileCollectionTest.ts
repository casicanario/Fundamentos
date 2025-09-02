//Importar la clase MobileCollection.
//Crear 4 objetos de la clase Mobile y un array que los contenga.
//Crear un objeto myCollection de la clase MobileCOllection, asignarle el array que hemos creado previamente y comprobar todos sus metodos.


// Importamos las clases necesarias
import { Mobile } from "./mobile";
import { MobileCollection } from "./mobileCollection";

// Creamos 4 objetos de la clase Mobile
let mobile1 = new Mobile("iPhone", "Apple", "12 Pro", "Silver", 999);
let mobile2 = new Mobile("Galaxy", "Samsung", "S22", "Black", 899);
let mobile3 = new Mobile("Pixel", "Google", "7 Pro", "White", 799);
let mobile4 = new Mobile("Xiaomi 13", "Xiaomi", "13", "Blue", 699);

// Creamos un array con los móviles
let myMobiles: Mobile[] = [mobile1, mobile2, mobile3, mobile4];

// Creamos el objeto myCollection de la clase MobileCollection
let myCollection = new MobileCollection(myMobiles);

// --- Comprobamos los métodos ---
console.log("=== Colección de Móviles ===");
console.log(myCollection.getMobiles()); // Devuelve el array de móviles

console.log("=== Precio total inicial ===");
console.log(myCollection.getTotalPrice()); // Muestra el precio total

// Probamos setMobiles (reemplazamos colección con solo 2 móviles)
myCollection.setMobiles([mobile1, mobile4]);

console.log("=== Nueva colección de móviles ===");
console.log(myCollection.getMobiles());

console.log("=== Nuevo precio total ===");
console.log(myCollection.getTotalPrice());

// Probamos setTotalPrice (aunque normalmente no se debería modificar manualmente)
myCollection.setTotalPrice(5000);
console.log("=== Precio total modificado manualmente ===");
console.log(myCollection.getTotalPrice());

