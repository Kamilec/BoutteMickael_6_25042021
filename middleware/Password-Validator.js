const passwordSchema = require('../models/Password-Validator'); // Importation du models du password

module.exports = (req, res, next) => { // Vérification que le mot de passe respecte le schéma et envoie un message si c'est incorrect
  if (!passwordSchema.validate(req.body.password)) {
    res.writeHead(400,'Format du mot de passe requis : entre 8 et 100 caractères, sans espaces et 2 chiffres minimum."}',
      {
        'content-type': 'application/json',
      }
    );
    res.end('Le format du mot de passe est incorrect.');
  } else {
    next();
  }
};