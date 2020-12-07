test en node con mocha
-----------------------

documentacion de node
-------------------------
https://nodejs.org/docs/latest-v13.x/api/synopsis.html

documentacion de express
--------------------------------
https://expressjs.com/es/guide/routing.html

crear package.json
--------------------------
npm init -y

instalar express
------------------------
npm i express

crear fichero .gitignore
------------------------------
https://github.com/github/gitignore/blob/master/Node.gitignore

run el proyecto
-------------------------
node index.js (nombre del fichero)

para que el servidor actualice cambios - nodemon
-------------------------------------------------
$ sudo npm instal -g nodemon
añadir en package.json:
 "scripts": {
    "start": "nodemon ./bin/www"

run el proyecto:
-----------------
$npm start

---------------------------------------------------
testing automatico - mocha y chai
---------------------------------------------------

instalacion de chai, chai-http y mocha
------------------------------------------------
$ npm i chai chai-http mocha -D

crear fichero test en carpeta tests
-------------------------------------
añadir script en package.json
-------------------------------------
"scripts": {    
    "test": "mocha tests/*.js --exit",

ejecutar app
-----------------
$ npm run test
