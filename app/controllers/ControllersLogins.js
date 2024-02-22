const Logins = require("../models/Logins");
const connection = require("../../config/DataBaseMYSQL");

class ControllersLogins{
    constructor(){
    }

    listEmpresas(app, req, res){
        const login = new Logins();
    
        login.read(2, (error, result, fields) => {
            if(!error){
                res.render("pages_admin/table_empresas",{empresas:result})
            }
            else{
                console.log(error);
            }    
        });
    };
}

module.exports = new ControllersLogins();