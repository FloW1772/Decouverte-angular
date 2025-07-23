"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const adress_1 = require("./adress");
const employee_1 = require("./employee");
const company_1 = require("./company");
// -------------------------------------------
// * MAIN
// -------------------------------------------
// 1 . Company : Oranges
let orangeCompany = new company_1.Company("Oranges", new adress_1.Adress("44300", "Nantes"));
orangeCompany.employees = [
    new employee_1.Employee("Grieeman", "Natacha", 32),
    new employee_1.Employee("Dupont", "Jean-Luc", 37),
];
// 2 . Company : GoGoDev
let goGoDevCompany = new company_1.Company("GoGoDev", new adress_1.Adress("29820", "Bohars"));
goGoDevCompany.employees = [
    new employee_1.Employee("Brechet", "Stephane", 29)
];
// 3 . Company : NextDigital
let nextDigitalCompany = new company_1.Company("NextDigital", new adress_1.Adress("29770", "Cléden Cap Sizun"));
nextDigitalCompany.employees = [
    new employee_1.Employee("Lemoine", "Sasha", 24),
    new employee_1.Employee("Durand", "Esteban", 31),
    new employee_1.Employee("Laporte", "Mélanie", 34)
];
// * Afficher les infos
orangeCompany.display();
console.log('\n--------------------------------------------\n');
goGoDevCompany.display();
console.log('\n--------------------------------------------\n');
nextDigitalCompany.display();
