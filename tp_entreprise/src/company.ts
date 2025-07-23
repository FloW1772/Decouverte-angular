import { Adress } from "./adress";
import { Employee } from "./employee";

export class Company {

    public libelle: string;
    public address: Adress;
    public employees: Employee[] = [];

    constructor(libelle: string, address: Adress) {
        this.libelle = libelle;
        this.address = address;
    }

    display() {
        const numEmployees = this.employees.length;
        console.log(`${this.libelle} (${this.address.cp} - ${this.address.city}), ${numEmployees} salarié(e)s`);

        for (let employee of this.employees) {
            console.log(`salarié(e) : ${employee.lastName} ${employee.firstName}, ${employee.age} ans`);
        }
    }
}