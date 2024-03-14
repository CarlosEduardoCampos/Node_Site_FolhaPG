const connection = require("../../config/DataBaseMYSQL");

class Logins{
    constructor(id_login=0, nome='', telefone='', email='', senha='', fk_tipo=0){
        this.conn = connection; 
        this.id_login = id_login;
        this.nome = nome;
        this.telefone = telefone;
        this.email = email;
        this.senha = senha;
        this.fk_tipo = fk_tipo;
    }
};

module.exports = Logins;