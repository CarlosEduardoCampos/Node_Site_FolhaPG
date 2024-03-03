const Logins = require("./Logins");

class Colaboradores extends Logins{
    constructor(
        // Variaveis da Classe Logins:
        id_login=0,
        nome="",
        telefone="",
        email="",
        senha="",
        fk_tipo="",
        // Variaveis da Classe Colaboradores:
        id_colaborador=0,
        cargo="",
        salario=0.0,
        dt_admissao="",
        dt_demissao="",
        fk_empresa=0,
        fk_periodo=0,
        fk_turno=0,
    ){
        // Inicia variaveis da classe herdada:
        super(id_login, nome, telefone,email, senha, fk_tipo);
        // Inicia varioaveis da classe atual:
        this.id_colaborador = id_colaborador;
        this.cargo = cargo;
        this.salario = salario;
        this.dt_admissao = dt_admissao;
        this.dt_demissao = dt_demissao;
        this.fk_empresa = fk_empresa;
        this.fk_periodo = fk_periodo;
        this.fk_turno = fk_turno;
        this.fk_login = id_login;
    };

    //Metodos CRUD:
    // Raliza o cadastro de um novo colaborador:
    create(callback){
        this.conn.query("CALL create_colaborador(?, ?, ?, ?, ?, ?, ?, ?, ?, ?);",
            [
                this.nome,
                this.telefone,
                this.email,
                this.senha,
                this.cargo,
                this.salario,
                this.dt_admissao,
                this.fk_empresa,
                this.fk_periodo,
                this.fk_turno
            ],
            callback
        );
    };

    // Busca um  ou mais colaboradores no banco:
    read(callback,id_empresa=null, id_colaborador=null){
        // Ferifica se a busca e por um colaborado especifico:(Se não)
        if(!id_colaborador){
            this.conn.query(
                "SELECT ID_login, FK_empresa, ID_colaborador, nome, telefone, email, cargo FROM fpg_colaboradores INNER JOIN fpg_logins ON FK_login = ID_login JOIN fpg_tiposlogin ON fpg_logins.FK_tipo = fpg_tiposlogin.ID_tipo WHERE fpg_colaboradores.FK_empresa = ?;",
                id_empresa,
                callback
            );
        }
        //(Se sim)
        else{
            this.conn.query(
                "SELECT * FROM fpg_colaboradores INNER JOIN fpg_logins ON FK_login = ID_login JOIN fpg_tiposlogin ON fpg_logins.FK_tipo = fpg_tiposlogin.ID_tipo WHERE fpg_colaboradores.ID_colaborador = ?;",
                [
                    id_colaborador
                ],
                callback
            );
        }
    };

    // Atualiza os dados cadastrados de um colaborador:
    update(callback){
        this.conn.query("CALL update_colaboradores(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);",
            [
                this.id_login,
                this.id_colaborador,
                this.nome,
                this.telefone,
                this.email,
                this.senha,
                this.cargo,
                this.salario,
                this.dt_admissao,
                this.dt_demissao,
                this.fk_periodo,
                this.fk_turno
            ],
            callback
        );
    };

    // Apaga o cadastro de um colaborador:
    delete(id, callback){
        this.conn.query("DELETE FROM fpg_logins WHERE ID_login = ?;",
            id,
            callback
        );
    };
};

module.exports = Colaboradores;