"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Company = void 0;
class Company {
    constructor(libelle, address) {
        this.employees = [];
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
exports.Company = Company;
