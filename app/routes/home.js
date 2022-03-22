module.exports=function(app){  //módulo para a rota home

app.get('/', function(req,res){ //rota para a tela pricipal 
    res.render('home/index.ejs'); //renderização da tela
});  

}