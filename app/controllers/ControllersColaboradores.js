const Colaboradores = require("../models/Colaboradores");

class ControllersColaboradores{
    constructor(){
        this.colaboradores = new Colaboradores();
    };

    // Renderiza uma lista dos colaboradores relacionados a empresa:
    renderTableColaboradores(req, res){
        this.colaboradores.read(req.params.id, (error, result) => {
            console.log(result);
            // Confirmo se a requisição ao banco deu certo:(SE sim)
            if(!error){
                res.render("pages_admin/table_colaboradores",{colaboradores:result, id_empresa: req.params.id});
            }
            //(Se não)
            else{
                console.log(error);
            };
        });
    };

    // Renderiza o formulario de cadastro de colaboradores:
    renderFormColaboradores(req, res){
        try {
            res.render("pages_admin/form_colaboradores", {id:req.params.id});
        }
        catch (error) {
            console.log(error);
        };
    };

    //Cria um novo colaborador e renderiza a nova lista de colaboradores:
    createColaboradores(req, res){
        this.colaboradores = new Colaboradores(
            0,
            req.body.nome,
            req.body.telefone,
            req.body.email,
            req.body.senha,
            0,
            0,
            req.body.cargo,
            req.body.salario,
            req.body.DT_admissao,
            '',
            req.params.id,
            req.body.FK_periodo,
            req.body.FK_turno
        );
        this.colaboradores.create((error, result) => {
            // Comfirma se a query foi executada corretamente:(Se sim)
            if(!error){
                res.redirect('/colaboradores/list/' + req.params.id);
            }
            //(Se não)
            else{
                console.log(error);
            };
        });
    };

    // Apaga um cadastro de colaborador:
    deleteColaboradores(req, res){
        this.colaboradores.delete(req.params.id, (error, result) => {
            // Comfirma se a query foi executada corretamente:(Se sim)
            if(!error){
                res.redirect('/colaboradores/list/' + req.params.id_empresa);
            }
            //(Se não)
            else{
                console.log(error);
            };
        });
    };
};

module.exports = new ControllersColaboradores();