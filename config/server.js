const express = require ('express'); //importação do express
const app = express(); //Execução do express
app.set('view-engine','ejs'); //Configuração do ejs como motor de telas
app.set('views', './app/views'); //configuração do novo diretório da pasta views

module.exports=app; //exportação da váriavel app