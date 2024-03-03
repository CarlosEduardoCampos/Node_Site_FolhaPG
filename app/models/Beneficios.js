const connection = require('../../config/DataBaseMYSQL');

class Beneficios{
    constructor(id_beneficio=0, titulo='', descricao=''){
        this.id_beneficio = id_beneficio;
        this.titulo = titulo;
        this.descricao = descricao;
        this.conn = connection;
    };

    // Metodos CRUD:
    create(calback){

    };

    read(calback){
        this.conn.query('SELECT * FROM fpg_beneficios;', calback);
    };

    update(calback){

    };

    delete(calback){

    };
}

module.exports = Beneficios;