import { Adress } from "./adress";
import { Employee } from "./employee";
import { Company } from "./company";
// -------------------------------------------
// * MAIN
// -------------------------------------------

// 1 . Company : Oranges
let orangeCompany = new Company("Oranges", new Adress("44300", "Nantes"));

orangeCompany.employees = [
    new Employee("Grieeman", "Natacha", 32),
    new Employee("Dupont", "Jean-Luc", 37),
];

// 2 . Company : GoGoDev
let goGoDevCompany = new Company("GoGoDev", new Adress("29820", "Bohars"));

goGoDevCompany.employees = [
    new Employee("Brechet", "Stephane", 29)
];

// 3 . Company : NextDigital
let nextDigitalCompany = new Company("NextDigital", new Adress("29770", "Cléden Cap Sizun"));

nextDigitalCompany.employees = [
    new Employee("Lemoine", "Sasha", 24),
    new Employee("Durand", "Esteban", 31),
    new Employee("Laporte", "Mélanie", 34)
];

// * Afficher les infos
orangeCompany.display();

console.log('\n--------------------------------------------\n');

goGoDevCompany.display();

console.log('\n--------------------------------------------\n');

nextDigitalCompany.display();
