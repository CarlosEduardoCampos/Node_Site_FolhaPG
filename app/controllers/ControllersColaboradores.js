const Colaboradores = require("../models/Colaboradores");

class ControllersColaboradores{
    constructor(){
        this.colaboradores = new Colaboradores();
    }

    listColaboradores(app, req, res){
        this.colaboradores.read(2, (error, result, fields) =>{
            // Confirmo se a requisição ao banco deu certo:(SE sim)
            if(!error){
                console.log(result);
            }
            //(Se não)
            else{
                console.log(error);
            }
        });
    }
}

module.exports = new ControllersColaboradores();