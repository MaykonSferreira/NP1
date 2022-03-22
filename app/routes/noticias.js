module.exports=function(app){ //módulo para a rota noticias

    app.get('/noticias', function(req,res){ //rota para a tela notícias
        const dbConnection=require('../../config/dbConnection');
        const connection=dbConnection();

        connection.query('select * from noticias', function (error, result){
            if(error){
                console.log(error);
            }
            res.render('noticias/noticias.ejs',{noticias:result}); //renderização da tela
        });

    });  
    
}