const express = require('express');
const router = express.Router(); //Chargement du middleware niveau router

const userCtrl = require('../controllers/user');

router.post('/signup', userCtrl.signup); //Création d'un nouvel utilisateur
router.post('/login', userCtrl.login); //Connexion d'un utilisateur existant

module.exports = router;
