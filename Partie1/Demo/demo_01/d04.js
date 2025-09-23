let firstname = ["Isaac", "Pierrick", "Teletubies"]

//Exemple find (retourne la référence de l'objet)
let elementTrouve = firstname.find(value => value == "Isaac")

//Pseudo code
/*
const elementTrouve = firstname.find(
    maFonction(value)
    {
        return value == "Isaac";
    }
);
*/
console.log(elementTrouve); // Affiche "Isaac"