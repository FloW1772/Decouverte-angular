function downloadFile(){
    return new Promise((resolve, reject) => {
        console.log("Telechargement en cours...");

        // Simuler 1 sec d'attente pour resolve
        setTimeout(() => {
            resolve("Téléchargement terminé");
        }, 1000);
    })
}

// Une promise qui retourne du JSON
function downloadJSON(){
    return new Promise((resolve, reject) => {
        // Simuler 1 sec d'attente pour resolve
        setTimeout(() => {
            resolve({firstname : "Isaac", age: 29})
        }, 1000);
    })
}

downloadFile().then((message) => {
    // telechargement terminé
    console.log(message);

    return downloadJSON();
}).then((json) => {
    // Le json de downloadJSON
    console.log(json);
});
 