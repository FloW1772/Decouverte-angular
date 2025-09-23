class Person {
    constructor(firstName) {
        this.firstName = firstName;
    }
}

//Tableau de 3 personnes
let persons = [
    new Person("Isaac"),
    new Person("Denver"),
    new Person("Sharknado")
];

// Afficher les 3 personnes du Tableau
persons.forEach(element => {
    console.log(element)
});

//Trouver une personnne
let foundPerson = persons.find(person => person.firstName === "Sharknado");

//Modifier la personne trouvée
foundPerson.firstName = "Sharknado Zibest";

//Afficher les 3 personnes du Tableau après modification
console.log("------------------------------------------------------------")
persons.forEach(element => {
    console.log(element)
});