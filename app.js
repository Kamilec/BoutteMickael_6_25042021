const express = require('express'); //Importation du framewrok express pour node.js
const bodyParser = require('body-parser'); 
const mongoose = require('mongoose'); //Importation mongoose qui permet la création de modèle pour mongoDb
const userRoutes = require('./routes/user'); //Importation du routeur pour les utilisateurs
const path = require('path'); //Accès aux chemins des fichiers

const sauceRoutes = require('./routes/sauces'); //Importation du routeur pour les sauces

const app = express(); //Appliquation du framework express

mongoose //Connexion de l'API à la base de données mongoDB grâce à mongoose
  .connect(
    'mongodb+srv://Lackiem:210187@cluster0.dj3s6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

 // Définition des paramètres d'en-tête 
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); //Accès à l'API depuis n'importe quelle origine
  res.setHeader( //Autorisation des en-têtes spécifiées
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
  );
  res.setHeader(//Utilisation des méthodes définies ci-dessous
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS'
  );
  next();
});


app.use(bodyParser.json()); //Récupération du corps de la requête au format json

app.use('/images', express.static(path.join(__dirname, 'images'))); //Service des fichiers statiques, présents dans le dossier images
app.use('/api/sauces', sauceRoutes); //Routes concernant les sauces pour toutes demande vers le endpoint /api/sauces
app.use('/api/auth', userRoutes); //Routes concernant les utilisateurs pour toutes demande vers le endpoint /api/auth

module.exports = app;