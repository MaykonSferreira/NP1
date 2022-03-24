const app=require('./config/server'); //configuração e conexão das rotas com o app.js
const rotaHome=require('./app/routes/home')(app);
const rotaAdmin=require('./app/routes/admin')(app);
const rotaNoticias=require('./app/routes/noticias')(app);


app.listen('3000', function(){ //Criação de um servidor na porta 3000
    console.log('Servidor rodando na porta 3000')
}); //execução do servidor na porta 3000 