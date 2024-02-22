class Empresas extends Logins{
    constructor(){
        super();// referencia a class herdada;
        this.ID_empresa = 0;
        this.cnpj = "";
    };

    // Metodos CRUD:
    create(){
        return 0;
    };

    read(callback, pesquisa=""){
        this.conn.query("SELECT * FROM fpg_empresas", callback)
    };

    update(empresa=new Empresas()){
        return empresa;
    };

    delete(id){
        return id;
    };
};

module.exports = Empresas;