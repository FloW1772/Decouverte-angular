// Scope / Portée (Contexte d'utilisation/d'existence)
// 1. Déclarer Scope Globale "plat"
let plat = "Crevette Nutella"

// 2. Afficher le plat
console.log(plat)

// 3. Déclarer une méthode qui utilise le plat (contexte global)
function platGlobal() {
    plat = "Riz Carbo"
}

// 4. Appel de la fonction
platGlobal()

// 5. Re afficher le plat
console.log(plat)