class Person {
    constructor(firstName) {
        this.firstName = firstName;
    }

    display() {
        console.log(`Bonjour, je m'appelle ${this.firstName}`);
    }
}

// let = variable (peut changer la valeur) / const = constante (lecteur seule)
//Instancier deux personnes

let isaac = new Person("Isaac");
let denver = new Person("Denver");

//afficher 
isaac.display();
denver.display();

//-----------------------------------------------------------------------------------------
// ETAPE 2 
//-----------------------------------------------------------------------------------------


//afficher
isaac = denver
console.log("");
console.log("-----------------------------------------------------------");
console.log("");

isaac.display();
denver.display();

//-----------------------------------------------------------------------------------------
// ETAPE 3 
//-----------------------------------------------------------------------------------------

isaac.firstName = "Sharknado"

//afficher
isaac = denver
console.log("");
console.log("-----------------------------------------------------------");
console.log("");

isaac.display();
denver.display();
