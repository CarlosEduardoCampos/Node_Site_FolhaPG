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
    // Realiza o cadastro de uma nova empresa:
    create(callback){
        this.conn.query(
            "CALL create_empresa(?, ?, ?, ?, ?, ?);",
            [
                this.nome,
                this.telefone,
                this.email,
                this.senha,
                this.fk_tipo,
                this.cnpj
            ],
            callback
        );
    };

    // Busca uma ou mais empresas no banco:
    read(callback, id_login=null){
        // Ferifica se a busca e por uma empresa especifica:(Se não)
        if(!id_login){
            this.conn.query(
                "SELECT ID_login, ID_empresa, cnpj, nome, telefone, email FROM fpg_empresas INNER JOIN fpg_logins ON FK_login = ID_login JOIN fpg_tiposlogin ON fpg_logins.FK_tipo = fpg_tiposlogin.ID_tipo;",
                callback
            );
        }
        //(Se sim)
        else{
            this.conn.query(
                "SELECT * FROM fpg_empresas INNER JOIN fpg_logins ON FK_login = ID_login JOIN fpg_tiposlogin ON fpg_logins.FK_tipo = fpg_tiposlogin.ID_tipo WHERE fpg_logins.ID_login  = ?;",
                id_login, 
                callback
            );
        };
    };

    // Atualiza os dados de um cadastro no banco:
    update(callback){
        this.conn.query(
            "CALL update_empresa(?, ?, ?, ?, ?, ?, ?, ?);", 
            [
                this.id_login,
                this.nome,
                this.telefone,
                this.email,
                this.senha,
                this.id_empresa,
                this.cnpj
            ],
            callback
        );
    };

    // Apaga um cadastro no banco:
    delete(id, callback){
        this. conn.query(
            "DELETE FROM fpg_logins WHERE ID_login = ?;",
            id,
            callback
        );
    };
};

module.exports = Empresas;