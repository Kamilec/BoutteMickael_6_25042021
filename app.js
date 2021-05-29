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
  
//Middleware permettant d'accéder à l'API depuis n'importe quelle origine
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); //Indication que les ressources peuvent être partagées depuis n'importe quelle origine
  res.setHeader('Access-Control-Allow-Headers','Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'); //Indication que les en-têtes seront utilisées après la pré-vérification cross-origin 
  res.setHeader('Access-Control-Allow-Methods','GET, POST, PUT, DELETE, PATCH, OPTIONS'); //Indicaition des méthodes autorisées pour les requêtes HTTP
  next();
});


app.use(bodyParser.json()); //Middleware qui permet de parser les requêtes par le client, on peut y accèder grâce à req.body

app.use('/images', express.static(path.join(__dirname, 'images'))); //Middleware qui permet de charger les fichiers qui sont dans le répertoire image
app.use('/api/sauces', sauceRoutes); //Middleware qui va permettre la transimission des requêtes vers ces url aux routes correspondantes
app.use('/api/auth', userRoutes); 

module.exports = app;