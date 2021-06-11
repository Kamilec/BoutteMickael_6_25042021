https://kamilec.github.io/BoutteMickael_6_25042021/

# So Pekocko !

Pour que l'application soit fonctionnelle à 100%, merci de bien lire attentivement les instructions ci-dessous :

> Avant toutes choses, installez d'abord **nodes.js** sur votre ordinateur

Maintenant que tout est prêt on peut commencer !

## Clonage du projet dans son intégralité :
- Partie **frontend** avec le terminal de commande :  
    > git clone https://github.com/OpenClassrooms-Student-Center/dwj-projet6.git frontend

- Partie **backend** avec la commande suivante : 
    > git clone https://github.com/Kamilec/BoutteMickael_6_25042021.git backend
    
    
    
## Lancement de l'application : 
- Depuis le terminal de commande, via le dossier frontend, entrez les commandes : 
    > npm install
    > npm start
Si le message suivant apparaît **"Compiled successfully"**, l'installation a fonctionné parfaitement et vous pouvez lancer l'application avec votre navigateur web 
via http://localhost:4200/ (ctrl + clic gauche)
    > npm init (/!\ à faire dans un terminal différent)
    > git init
 
- Toujours dans votre terminal de commande, mais ce coup-ci dans le dossier backend, tapez les commandes :
    > npm install
    > npm install -g nodemon
    > nodemon server (ouvrir un nouveau terminal)
    > npm install --save express (retour sur le temrinal backend (valable pour les commandes suivantes))
    > npm install --save mongoose
    La connexion a réussie et le message suivante apparaît : **"Listening on port 3000"** et **"Connexion à MongoDB réussie"**.
    Dans le cas contraire, il y a un petit problème et il faudra en chercher la cause !
    
    
    
## Procédure pour un cryptage des données :
- Dans le terminal du backend (à nouveau) :
    > npm install --save mongoose-unique-validator
    > npm install --save bcrypt
    > npm install -- save jsonwebtoken
    > npm install --save maskdata
 Par le biais des ces commandes, nous protégons nos données et suivons les lignes directrices recommandées par la RGPD et l'OWASP ! La sécurité avant tout !    
 
