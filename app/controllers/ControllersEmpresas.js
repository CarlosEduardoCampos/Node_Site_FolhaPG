const Empresas = require("../models/Empresas");
const connection = require("../../config/DataBaseMYSQL")

class ControllersEmpresas{
    constructor(){
        this.conn = connection; 
    }

    listEmpresas(app, req, res){
        const empresa = new Empresas(this.conn);
    
        empresa.read((error, result, fields) => {
            if(!error){
                res.render("pages_admin/table_empresas",{empresas:result})
            }
            else{
                console.log(error);
            }    
        });
    };
}

module.exports = new ControllersEmpresas();