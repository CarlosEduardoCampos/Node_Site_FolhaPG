const Empresas = require("../models/Empresas");

class ControllersEmpresas{
    constructor(){
        this.empresa = new Empresas();
    }

    listEmpresas(app, req, res){
        this.empresa.read((error, result, fields) => {
            if(!error){
                res.render("pages_admin/table_empresas",{empresas:result})
            }
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