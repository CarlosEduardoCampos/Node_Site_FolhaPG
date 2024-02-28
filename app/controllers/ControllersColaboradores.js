const Colaboradores = require("../models/Colaboradores");

class ControllersColaboradores{
    constructor(){
        this.colaboradores = new Colaboradores();
    }

    renderListColaboradores(app, req, res){
        this.colaboradores.read(req.params.id, (error, result, fields) => {
            // Confirmo se a requisição ao banco deu certo:(SE sim)
            if(!error){
                res.render("pages_admin/table_colaboradores",{colaboradores:result});
            }
            //(Se não)
            else{
                console.log(error);
            }
        });
    }
}

module.exports = new ControllersColaboradores();