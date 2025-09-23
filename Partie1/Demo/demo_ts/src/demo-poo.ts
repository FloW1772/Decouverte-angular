class Vehicule {

    //Propriétés
    // -Soit nullable et donc optional(label?)
    // -soit valeur par défaut donc pas besoin du constructeur label : String = "Valeur"
    // -on fait: soit déclarer mais doit obligatoirement être initialisé dans le constructeur


    public label: string;

    constructor(label: string) {
        this.label = label;
    }

}  

class Voiture extends Vehicule {

    rouler(){
        console.log('Vroooooom Vrooooooooooom');
    }
}

//Instancier une voiture
let vroom = new Voiture('Clio 2');

vroom.rouler();