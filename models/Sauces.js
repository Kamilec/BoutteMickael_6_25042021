//Création d'un schéma de données grâce à mongoose avec les propriétés désirées
const mongoose = require('mongoose');

const sauceSchema = mongoose.Schema({
  id: { type: String, required: false },
  userId: { type: String, required: true },
  name: { type: String, required: true },
  manufacturer: { type: String, required: true },
  description: { type: String, required: true },
  mainPepper: { type: String, required: true },
  imageUrl: { type: String, required: true },
  heat: { type: Number, required: true },
  likes: { type: Number, required: true },
  dislikes: { type: Number, required: true },
  usersLiked: { type: Array, required: true },
  usersDisliked: { type: Array, required: true },
});

//Exportation en tant que modèle
module.exports = mongoose.model('Sauce', sauceSchema);