const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1]; //Extraction du token de la requête
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET'); //Décryptage token grâce à la clé secrète
    const userId = decodedToken.userId;
    if (req.body.userId && req.body.userId !== userId) {
      throw 'Invalid user ID'; //Renvoie une erreur si l'id décodée de la requête ne correspond pas l'id de l'utilisateur
    } else {
      next(); //Authentification réussie et la suite du code peut s'exécuter
    }
  } catch {
    res.status(401).json({
      error: new Error('Invalid request!'),
    });
  }
};