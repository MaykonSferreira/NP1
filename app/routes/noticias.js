module.exports=function(app){ //módulo da conexão do servidor para a rota noticias 

    app.get('/noticias', function(req,res){ //rota para a tela notícias
        const dbConnection=require('../../config/dbConnection'); //impotação do dbConnection
        var connection=dbConnection();

        connection.query('select * from noticias', function (error, result){ //função para para a condiçao error (erro) e result (resultado)
            if(error){
                console.log(error);
            } //resposta de query para clientes
            res.render('noticias/noticias.ejs',{noticias:result}); //renderização da tela
        });

    });  
    
}