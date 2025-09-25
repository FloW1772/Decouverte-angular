# TP Auth
## Enoncé

### Objectif

Créer une app avec un component commun a toutes les pages : Navbar, puis les pages suivante : Home, Contact, Profile (Visible si une User est connecté) , Register/Login
### Navigation

Redirection Auto sur Home au chargement de l'App

Redirection Auto sur un composant NotFound si la route saisie n'existe pas 

Affichage de l'email de la personne connecté si c'est le cas, dans la page Profile, si personne n'est en session, le menu n'est pas visible (InputSignal : App -> Navbar)

### Persistance des données

Persistance des données dans le LocalStorage et d'un User Connecté dans SessionStorage à travers un Service (Auth)

Utiliser une ou plusieurs Interfaces/Types pour typer proprement les données

Un User est représenté par son email et son password et un token lors de la connexion

### Contraintes techniques

- Utiliser le principe de Signal
- Ne pas utiliser d'Observable (la notion n'a pas encore été abordée)
- Ne pas utiliser de Guard (la notion n'a pas encore été abordée)
