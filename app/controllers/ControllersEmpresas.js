const Empresas = require("../models/Empresas");

class ControllersEmpresas{
    constructor(){
        this.empresa = new Empresas();
    }

    // Listando todas as empresas cadastradas:
    listEmpresas(app, req, res){
        this.empresa.read((error, result, fields) => {
            // Confirma se a requisição ao banco deu certo:(Se sim)
            if(!error){
                res.render("pages_admin/table_empresas",{empresas:result})
            }
            //(Se não)
            else{
                console.log(error);
            }    
        });
    };

    newEmpresa(app, req, res){
        this.empresa = new Empresas(0, 'João Silva', '(31) 98765-4321', 'joao.silva@email.com', 'senha123', 2);
        this.empresa.create((error, result, fields) => {
            if(!error){
                console.log("cad_empresa: foi realizado!")
            }
            else{
                console.log(error);
            }    
        });
        this.listEmpresas(app, req, res)
    }
}

module.exports = new ControllersEmpresas();