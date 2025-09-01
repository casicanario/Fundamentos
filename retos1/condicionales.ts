//realizar una funcion que dad una fecha de nacimiento te devuelva el signo de zodiacal.
//la fecha de nacimiento vendrá indicada por dos numeros: dia y mes.
//La cabecera de la funcion tendrá el siguiente aspecto: function zodiac(day, month)
//realizar un procedimiento que dado el nombre de un pais te imprima en que continente estás. ( maximo 5 paises por continent).
//La cabecera del procedimiento tendrá el siguiente aspecto: function continent(country)
//realizar una funcion que te imprima por consola el siguiente mensaje: ·El numero es par", si el numero introducido como parámetro de entrada es par.
//"El numero es impar", si el numero introducido como parámetro de entrada es impar.
//La cabecera de la funcion tendrá e siguiente aspecto: function isEven(number)
function zodiac(day: number, month: number): string {
    if ((day >= 21 && month == 3) || (day <= 20 && month == 4)) {
        return "Aries";
    } else if ((day >= 21 && month == 4) || (day <= 20 && month == 5)) {
        return "Tauro";
    }
    else if ((day >= 21 && month == 5) || (day <= 20 && month == 6)) {
        return "Géminis";
    }
    else if ((day >= 21 && month == 6) || (day <= 22 && month == 7)) {
        return "Cáncer";
    }
    else if ((day >= 23 && month == 7) || (day <= 22 && month == 8)) {
        return "Leo";
    }
    else if ((day >= 23 && month == 8) || (day <= 22 && month == 9)) {
        return "Virgo";
    }
    else if ((day >= 23 && month == 9) || (day <= 22 && month == 10)) {
        return "Libra";
    }
    else if ((day >= 23 && month == 10) || (day <= 21 && month == 11)) {
        return "Escorpio";
    }
    else if ((day >= 22 && month == 11) || (day <= 21 && month == 12)) {
        return "Sagitario";
    }
    else if ((day >= 22 && month == 12) || (day <= 20 && month == 1)) {
        return "Capricornio";
    }
    else if ((day >= 21 && month == 1) || (day <= 19 && month == 2)) {
        return "Acuario";
    }
    else if ((day >= 20 && month == 2) || (day <= 20 && month == 3)) {
        return "Piscis";
    }
    else {
        return "Fecha no válida";
    }
}
function continent(country: string): void {
    switch (country.toLowerCase()) {
        case "españa":
        case "francia":
        case "alemania":
        case "italia":
        case "portugal":
            console.log("Europa");
            break;
        case "china":
        case "japón":
        case "india":
        case "corea del sur":
        case "tailandia":
            console.log("Asia");
            break;
        case "argentina":
        case "brasil": 
        case "chile":
        case "colombia":
        case "perú":   
            console.log("América del Sur");
            break;
        case "canadá":
        case "estados unidos": 
        case "méxico":
        case "cuba":
        case "puerto rico":
            console.log("América del Norte");
            break;
        case "nigeria":
        case "egipto":
        case "sudáfrica":
        case "kenia":
        case "argelia":
            console.log("África");
            break;
        default:
            console.log("País no reconocido");
    }
}

function isEven(number: number): void {
    if (number % 2 === 0) {
        console.log("El número es par");
    } else {
        console.log("El número es impar");
    }
}

//subir los cambios a Github