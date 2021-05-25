const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator'); //Permet la vérification que le champ avec la propriété unique n'est pas déjà présent dans la bdd

//Création d'un schéma de données grâce à mongoose avec les propriétés désirées
const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

//Application de unique-validator au schéma
userSchema.plugin(uniqueValidator);

//Exportation du schéma en tant que modèle
module.exports = mongoose.model('User', userSchema);
