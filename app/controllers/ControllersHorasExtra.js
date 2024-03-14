const HorasExtras = require("../models/HorasExtra");

class ControllersHorasExtra{
    constructor(){
        this.horasExtra = new HorasExtras();
    };

    // Renderiza formulario e lista de horas extra por funcionario:
    renderFormHoras(req, res){
        this.horasExtra.fk_colaborador = req.params.id;
        this.horasExtra.read((error, result) =>{
            // Verifica se a query executou corretamente:(SE sim)
            if(!error){
                console.log(result);
                res.render("pages_admin/form_horas_extras", {id: req.params.id, horas:result});
            }
            else{
                console.log(error);
            }
        });
        
    }

    createHoras(req, res){
        // Relaciona os dados da requisição ao objeto:
        this.horasExtra = new HorasExtras(
            req.body.horas,
            req.body.minutos,
            req.body.dia,
            req.params.id
        )

        // Chama função que cadastra no banco de dados:
        this.horasExtra.create((error, result) => {
            // Verifica se a query foi executada corretamente:(Se sim)
            if(!error){
                res.redirect('/horasextra/new/'+ req.params.id);
            }
            else{
                console.log(error);
            }
        });
    };
}

module.exports = new ControllersHorasExtra();