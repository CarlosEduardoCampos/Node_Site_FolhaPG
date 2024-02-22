const connection = require("../../config/DataBaseMYSQL")

class Logins{
    constructor(){
        this.conn = connection; 
        this.ID_login = 0;
        this.nome = "";
        this.telefone = "";
        this.email = "";
        this.senha = "";
        this.FK_tipo = 0;
    }

    // Metodos CRUD:
    create(){
        return 0;
    };

    read(type, callback){
        this.conn.query("SELECT * FROM fpg_logins WHERE FK_tipo = ?;", type, callback)
    };

    update(empresa=new Empresas()){
        return empresa;
    };

    delete(id){
        return id;
    };
};

module.exports = Logins;