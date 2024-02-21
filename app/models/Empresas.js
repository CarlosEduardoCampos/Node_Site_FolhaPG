class Empresas{
    constructor(connection){
        this.connection = connection;
        this.ID = "";
        this.nome = "";
        this.cnpj = "";
        this.telefone = "";
        this.email = "";
        this.senha = "";
    };

    // GETs:
    getID(){
        return this.ID;
    };

    getNome(){
        return this.nome;
    };

    getCnpj(){
        return this.cnpj;
    };

    getTelefone(){
        return this.telefone;
    };

    getEmail(){
        return this.email;
    };

    getSenha(){
        return this.senha;
    };
    // SETs:
    setID(id){
        this.ID = id;
    };

    setNome(nome){
        this.nome = nome;
    };

    setCnpj(cnpj){
        this.cnpj = cnpj;
    };

    setTelefone(telefone){
        this.telefone = telefone;
    };

    setEmail(email){
        this.email = email;
    };

    setSenha(senha){
        this.senha = senha;
    };

    // Metodos CRUD:
    create(){
        return 0;
    };

    read(callback, pesquisa=""){
        this.connection.query("SELECT * FROM fpg_empresas", callback)
    };

    update(empresa=new Empresas()){
        return empresa;
    };

    delete(id){
        return id;
    };
};

module.exports = Empresas;