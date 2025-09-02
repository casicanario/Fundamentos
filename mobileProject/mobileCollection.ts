//Crear la clase MobileCOllection con los siguientes atributos privados:
//mobiles: Mobile[]
//totalPrice:number

//El constructor deve tener como parametro de netrada el array de ojetos de la clase Mobile.
//Crear los metodos setters y getter para todos los atributos de la clase.

// Importamos la clase Mobile
import { Mobile } from "./mobile";

export class MobileCollection {
    // Atributos privados
    private mobiles: Mobile[];
    private totalPrice: number;

    // Constructor
    constructor(mobiles: Mobile[]) {
        this.mobiles = mobiles;
        this.totalPrice = this.totalPriceCalculation(); // usamos el método privado
    }

    // Getter de mobiles
    public getMobiles(): Mobile[] {
        return this.mobiles;
    }

    // Setter de mobiles
    public setMobiles(mobiles: Mobile[]): void {
        this.mobiles = mobiles;
        this.totalPrice = this.totalPriceCalculation(); // recalculamos con el método privado
    }

    // Getter de totalPrice
    public getTotalPrice(): number {
        return this.totalPrice;
    }

    // Setter de totalPrice (poco habitual, pero lo piden)
    public setTotalPrice(totalPrice: number): void {
        this.totalPrice = totalPrice;
    }

    // --- Método privado para calcular el precio total ---
    private totalPriceCalculation(): number {
        let total = 0;
        for (let mobile of this.mobiles) {
            total += mobile.getPrice();
        }
        return total;
    }
}

