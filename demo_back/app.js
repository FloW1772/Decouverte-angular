// Importer le module express
const express = require('express');


// Instancier le serveur express
const app = express();

//autoriser tout le monde a me requeter quand il y a un probleme de CORS
const cors = require('cors');
app.use(cors());


// Une URI get /articles
// Equivalent Spring Boot @GetMapping("/articles")
app.get('/articles', async (request, response) => {
    const articles = [ "Titre 1", "Titre 2", "Titre 3" ];

    // On envoie les articles récupérés en JSON
    return response.json(articles);
});

//lancer le serveur sur le port 3000
app.listen(3000, () => {
    console.log('Serveur démarré sur le port 3000' )});