const mysql=require('mysql'); //importaçao do módulo mysql

module.exports=function(){ //conexão com o database
return mysql.createConnection({ 
    host:'localhost',
    user:'root',
    password:'root',
    database:'portal_noticias' 
    }); //criaçao da conexão com o banco de dados potal_noticias
}