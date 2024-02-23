const Logins = require("./Logins");

class Empresas extends Logins{
    constructor(id_login=0, nome='', telefone='', email='', senha='', fk_tipo=0, id_empresa=0, cnpj='')
    {
        super(id_login, nome, telefone, email, senha, fk_tipo);// referencia a class herdada;
        this.id_empresa = id_empresa;
        this.cnpj = cnpj;
    };

    // Metodos CRUD:
    create(callback){
        this.conn.query("CALL create_empresa(?, ?, ?, ?, ?, ?);",
        [
            this.nome,
            this.telefone,
            this.email,
            this.senha,
            this.fk_tipo,
            this.cnpj
        ],
            callback()
            );
    };

    read(callback){
        this.conn.query("SELECT * FROM fpg_logins WHERE FK_tipo = ?;", 2, callback)
    };

    update(empresa=new Empresas()){
        return empresa;
    };

    delete(id){
        return id;
    };
};

module.exports = Empresas;