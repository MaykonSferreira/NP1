module.exports=function(app){ //módulo para a rota admin

    app.get('/formularioinclusaonoticia',(req,res)=>{ //rota para a tela de inclusão de um formulário
        res.render('admin/form_add_noticia.ejs'); //renderização da tela
    });  
    
    }
