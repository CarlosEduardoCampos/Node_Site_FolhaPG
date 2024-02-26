const Logins = require("./Logins");

class Empresas extends Logins{
    constructor(
        id_login=0,
        nome='',
        telefone='',
        email='',
        senha='',
        fk_tipo=0,
        id_empresa=0,
        cnpj=''
    ){
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

    read(callback, id=null){
        if(!id){
            this.conn.query("SELECT ID_login, nome, telefone, email FROM fpg_logins WHERE FK_tipo = ?;", 2, callback)
        }
        else{
            this.conn.query("SELECT * FROM fpg_empresas INNER JOIN fpg_logins ON FK_login = ID_login;")
        }
    };

    update(callback){
        this.conn.query("CALL update_empresa(?, ?, ?, ?, ?, ?, ?, ?);", 
        [
            this.id_login,
            this.nome,
            this.telefone,
            this.email,
            this.senha,
            this.fk_tipo,
            this.id_empresa,
            this.cnpj
        ],
        callback()
        );
    };

    delete(id, callback){
        this. conn.query("DELETE FROM fpg_logins WHERE ID_login = ?;", id, callback)
    };
};

module.exports = Empresas;