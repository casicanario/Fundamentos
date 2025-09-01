
//Crear la clase Mobile con los siguientes parametros:
//name: string
// trademark: string
// model: string
// color: string
// price: number
//constructor con los mismos parametros de entrada que atributos.

class Mobile {
    name: string;
    trademark: string;
    model: string;
    color: string;
    price: number;     
    constructor(name: string, trademark: string, model: string, color: string, price: number) {
        this.name = name;
        this.trademark = trademark;
        this.model = model;
        this.color = color;
        this.price = price;        
    }
    //crear los metodos setter y getter de cada atributo.
    public getName(): string {
        return this.name;
    }
    public setName(name: string): void {
        this.name = name;
    }
    public getTrademark(): string {
        return this.trademark;
    }
    public setTrademark(trademark: string): void {
        this.trademark = trademark;
    }
    public getModel(): string {
        return this.model;
    }
    public setModel(model: string): void {
        this.model = model;
    }
    public getColor(): string {
        return this.color;
    }

    public setColor(color: string): void {
        this.color = color;
    }
    public getPrice(): number {
        return this.price;
    }
    public setPrice(price: number): void {
        this.price = price;
    }
   
} 


// Método que imprime todas las características del móvil
public printAllCharacteristics(): void {
    console.log(`The characteristics of the mobile ${this.name} are:`);
    console.log(`Name: ${this.name}`);
    console.log(`Trademark: ${this.trademark}`);
    console.log(`Model: ${this.model}`);
    console.log(`Color: ${this.color}`);
    console.log(`Price: ${this.price}€`);
}

//exportar la clase Mobile
export { Mobile };


