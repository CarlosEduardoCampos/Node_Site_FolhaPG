// Importando módulos:
const express = require('express');
const bodyParser = require('body-parser');

// Importa e inicia dotenv:
require('dotenv').config();

// Iniciando express:
const app = express();

// Configurando ejs:
app.set('view engine', 'ejs');
app.set('views','./app/views');

// Configurando Middleware:
app.use(express.static('./app/public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// Importa servidor configurado:
module.exports = app;
