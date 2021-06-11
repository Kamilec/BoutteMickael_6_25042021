const express = require('express'); //Importation du framewrok express pour node.js
const bodyParser = require('body-parser'); 
const mongoose = require('mongoose'); //Importation mongoose qui permet la création de modèle pour mongoDb
const userRoutes = require('./routes/user'); //Importation du routeur pour les utilisateurs
const path = require('path'); //Accès aux chemins des fichiers
const helmet = require('helmet'); // Aide à sécuriser les applications Express en définissant divers en-têtes HTTP

const sauceRoutes = require('./routes/sauces'); //Importation du routeur pour les sauces

const app = express(); //Appliquation du framework express

app.use(helmet.contentSecurityPolicy()); // Atténue les attaques des scripts intersites.
app.use(helmet.dnsPrefetchControl()); // Aide à contrôler la prélecture DNS, ce qui peut améliorer la confidentialité des utilisateurs au détriment des performances.
app.use(helmet.expectCt()); // Aide à atténuer les certificats SSL mal émis.
app.use(helmet.frameguard()); // Aide à atténuer les attaques de détournement de clic.
app.use(helmet.hidePoweredBy()); // Supprime l'en-tête X-Powered-By, qui est défini par défaut dans certains frameworks (comme Express).
app.use(helmet.hsts()); // Indique aux navigateurs de préférer HTTPS à HTTP non sécurisé.
app.use(helmet.ieNoOpen()); // Internet Ex8 - Il force l'enregistrement des téléchargements potentiellement dangereux, ce qui atténue l'exécution du HTML dans le contexte de votre site.
app.use(helmet.noSniff()); // Cela atténue le reniflement de type MIME* qui peut entraîner des failles de sécurité.// * Le type Multipurpose Internet Mail Extensions (type MIME) est un standard permettant d'indiquer la nature et le format d'un document.
app.use(helmet.permittedCrossDomainPolicies()); // Indique à certains clients (principalement des produits Adobe) la politique de votre domaine pour le chargement du contenu interdomaine.
app.use(helmet.referrerPolicy()); // Définit l'en-tête Referrer-Policy qui contrôle les informations définies dans l'en-tête Referer.
app.use(helmet.xssFilter()); // Désactive le filtre de script intersite bogué des navigateurs en définissant l'en-tête X-XSS-Protection sur 0.

require('dotenv').config();

//Connexion de l'API à la base de données mongoDB grâce à mongoose
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_CLUSTER}.dj3s6.mongodb.net/${process.env.DB_DATA_BASE}`,
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
  )
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));
  
//Middleware permettant d'accéder à l'API depuis n'importe quelle origine
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); //Indication que les ressources peuvent être partagées depuis n'importe quelle origine
  res.setHeader('Access-Control-Allow-Headers','Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'); //Indication que les en-têtes seront utilisées après la pré-vérification cross-origin 
  res.setHeader('Access-Control-Allow-Methods','GET, POST, PUT, DELETE, PATCH, OPTIONS'); //Indication des méthodes autorisées pour les requêtes HTTP
  next();
});


app.use(bodyParser.json()); //Middleware qui permet de parser les requêtes par le client, on peut y accèder grâce à req.body

app.use('/images', express.static(path.join(__dirname, 'images'))); //Middleware qui permet de charger les fichiers qui sont dans le répertoire image
app.use('/api/sauces', sauceRoutes); //Middleware qui va permettre la transimission des requêtes vers ces url aux routes correspondantes
app.use('/api/auth', userRoutes); 

module.exports = app;