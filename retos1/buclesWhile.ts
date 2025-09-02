



 //realizar una funcion que te devuelva si existe al menos un número par en el array de umeros que introduces como parametro de entrada.

function hasEven(myNums: number[]): boolean {
  let i: number = 0;
  while (i < myNums.length) {
    if (myNums[i] % 2 === 0) {
      return true;
    }
    i++;
  }
  return false;
}

//Devuelve true solo si TODOS los nombres empiezan por 'M'.
//La cabecera de la funcion tendrá el siguiente aspecto: function allStartWithM(myNames)


function allStartWithM(myNames: string[]): boolean {
  let i: number = 0;
  while (i < myNames.length) {
    if (!myNames[i].startsWith("M")) {
      return false;
    }
    i++;
  }
  return true;
}
