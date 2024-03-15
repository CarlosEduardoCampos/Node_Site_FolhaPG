const connection = require("../../config/DataBaseMYSQL");

class HorasExtras{
    constructor(id=0, horas=0, minutos=0, dia='', fk_colaborador=0){
        this.conn = connection;
        this.ID_horas = id;
        this.horas = horas;
        this.minutos = minutos;
        this.dia = dia;
        this.fk_colaborador = fk_colaborador;
    };

    // Metodos CRUD:
    create(callback){
        this.conn.query(
            'INSERT INTO fpg_horasextra(horas, minutos, dia, FK_colaborador) VALUES(?, ?, ?, ?);',
            [
                this.horas,
                this.minutos,
                this.dia,
                this.fk_colaborador
            ],
            callback
        );
    };
    read(callback){
        this.conn.query(
            "SELECT ID_horas AS id, horas, minutos, DATE_FORMAT(dia, '%d/%m/%Y') AS dia FROM  fpg_horasextra WHERE FK_colaborador = ?;",
            [this.fk_colaborador],
            callback
        );
    };
    delete(callback){
        this.conn.query(
            'DELETE FROM fpg_horasextra WHERE ID_horas = ?;',
            [this.ID_horas],
            callback
        )
    };
};

module.exports = HorasExtras;