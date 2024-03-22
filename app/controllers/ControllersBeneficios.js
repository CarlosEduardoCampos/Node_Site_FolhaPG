const Beneficios = require("../models/Beneficios");

class ControllersBeneficios{
    constructor(){
        this.beneficios = new Beneficios();
    }

    renderFormBeneficios(req, res){
        this.beneficios.read((error, result) => {
            // Verifica se a query foi executada com sucesso:
            if(!error){
                res.render('pages_admin/form_beneficios',{beneficios: result});
            }
            else{
                console.log(error);
            }
        });
    };

    createBeneficios(req, res){
        this.beneficios = new Beneficios(
            0,
            req.body.titulo,
            req.body.descricao ? req.body.descricao : '',
            req.body.valor ? req.body.valor : 0
        );
        
        this.beneficios.create((error, result) => {
            // Verifica se a query executou corretamente:
            if(!error){
                res.redirect('/beneficios/new');
            }
        });
    }

    deleteBeneficios(req, res){
        this.beneficios.id_beneficio = req.params.id;

        this.beneficios.delete((error, result) =>{
            // Verifica se a query executou corretamente:
            if(!error){
                res.redirect('/beneficios/new');
            }
        });
    }
}

module.exports = new ControllersBeneficios();