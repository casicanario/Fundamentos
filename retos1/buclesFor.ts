// 1. Realizar una función que imprima los números impares existentes hasta el número indicado como parámetro de entrada.
// La cabecera de la función tendrá el siguiente aspecto: function evenNumbers(num)

function evenNumbers(num: number): void {
    for (let i = 1; i <= num; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}

// 2. Realizar una función que como parámetro de entrada reciba un array de strings 
// y como salida devuelva el array invertido. No se puede utilizar el método reverse de la clase Array.
// La cabecera de la función tendrá el siguiente aspecto: function myRevert(myArr)

function myRevert(myArr: string[]): string[] {
    let result: string[] = [];
    for (let i = myArr.length - 1; i >= 0; i--) {
        result.push(myArr[i]);
    }
    return result;
}

// 3. Realizar una función que reciba como parámetro un array de strings que contenga nombres de colores
// y te imprima en cada caso si el color está en el arcoiris o no.
// La cabecera de la función tendrá el siguiente aspecto: function isRainbow(colors)

function isRainbow(colors: string[]): void {
    const rainbow: string[] = ["rojo", "naranja", "amarillo", "verde", "azul", "índigo", "violeta"];
    for (let color of colors) {
        if (rainbow.includes(color.toLowerCase())) {
            console.log(`${color} está en el arcoiris`);
        } else {
            console.log(`${color} NO está en el arcoiris`);
        }
    }
}

// 4. Realizar una función que te devuelva la suma del número de caracteres 
// de las palabras almacenadas en un array.
// La cabecera de la función tendrá el siguiente aspecto: function add(myWords)

function add(myWords: string[]): number {
    let total: number = 0;
    for (let word of myWords) {
        total += word.length;
    }
    return total;
}


