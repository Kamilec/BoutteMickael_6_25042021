const express = require('express');
const router = express.Router(); //Chargement du middleware niveau router

const auth = require('../middleware/auth'); //Appel du middleware d'authentification

const sauceCtrl = require('../controllers/sauces');
const multer = require('../middleware/multer-config'); //Appel du middleware pour la gestion des images

//Liage des routes aux controllers
router.post('/', auth, multer, sauceCtrl.createSauce); //Création une sauce
router.put('/:id', auth, multer, sauceCtrl.modifySauce); //Modification d'une sauce existante
router.delete('/:id', auth, sauceCtrl.deleteSauce); //Suppression d'une sauce
router.get('/:id', auth, sauceCtrl.getOneSauce); //Récupération d'une seule sauce
router.get('/', auth, sauceCtrl.getAllSauce); //Récupération de toutes les sauces
router.post('/:id/like', auth, sauceCtrl.likeDislikeSauce); //Liker et disliker une sauce

module.exports = router;