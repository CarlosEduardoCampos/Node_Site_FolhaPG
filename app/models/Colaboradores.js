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
    create(callback){
        this.conn.query("CALL create_colaborador(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);",
        [
            this.nome,
            this.telefone,
            this.email,
            this.senha,
            this.fk_tipo,
            this.cargo,
            this.salario,
            this.dt_admissao,
            this.fk_empresa,
            this.fk_periodo,
            this.fk_turno
        ],
        callback()
        );
    };

    read(){

    };

    update(){

    };

    delete(){

    };
};