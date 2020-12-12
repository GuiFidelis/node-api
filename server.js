const express = require('express');
const cors = require ('cores');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//iniciando o App
const app = express();
app.use(express.json());
app.use(cores());
// Iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', {useNewUrlParser: true, useUnifiedTopology: true});

requireDir("./src/models");

//const Product = mongoose.model('Product');

//Primira rota
app.use('/api',  require('./src/routes'));

app.listen(8080);