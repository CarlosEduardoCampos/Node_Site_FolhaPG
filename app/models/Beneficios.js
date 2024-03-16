const connection = require('../../config/DataBaseMYSQL');

class Beneficios{
    constructor(id_beneficio=0, titulo='', descricao='', valor=0){
        this.id_beneficio = id_beneficio;
        this.titulo = titulo;
        this.descricao = descricao;
        this.valor = valor;
        this.conn = connection;
    };

    // Metodos CRUD:
    create(callback){
        this.conn.query(
            "INSERT INTO fpg_beneficios(titulo, descricao, valor) VALUES(?, ?, ?)",
            [
                this.titulo,
                this.descricao,
                this.valor
            ],
            callback
        );
    };

    read(calback){
        this.conn.query("SELECT * FROM fpg_beneficios;", calback);
    };

    update(calback){

    };

    delete(calback){

    };
}

module.exports = Beneficios;