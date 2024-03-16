const Beneficios = require("../models/Beneficios");

class ControllersBeneficios{
    constructor(){
        this.beneficios = new Beneficios();
    }

    renderFormBeneficios(req, res){
        this.beneficios.read((error, result) => {
            // Verifica se a query foi executada com sucesso:
            if(!error){
                res.render('pages_admin/form_beneficios',{beneficios: result, id: req.params.id});
            }
            else{
                console.log(error);
            }
        });
    }
}

module.exports = new ControllersBeneficios();