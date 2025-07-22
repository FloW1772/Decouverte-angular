class Matiere {
  constructor(libelle, notes) {
    this.libelle = libelle;
    this.notes = notes;
  }

  calculerMoyenne() {
    if (this.notes.length === 0) return 0;
    const somme = this.notes.reduce((acc, note) => acc + note, 0);
    return somme / this.notes.length;
  }
}

// Création des matières
const matieres = [
  new Matiere("Français", [12, 8, 13, 6]),
  new Matiere("Math", [4, 9, 16, 18]),
  new Matiere("Sport", [15, 13, 17, 2, 6])
];

let sommeDesMoyennes = 0;

console.log("Moyennes des matières :");
for (const matiere of matieres) {
  const moyenne = matiere.calculerMoyenne();
  console.log(`- ${matiere.libelle} : ${moyenne.toFixed(2)}`);
  sommeDesMoyennes += moyenne;
}

const moyenneGenerale = sommeDesMoyennes / matieres.length;
console.log(`\nMoyenne générale : ${moyenneGenerale.toFixed(2)}`);
