const TempData = require("../TempDB/TemDB");
const database = new TempData("Ocupacoes");

class Ocupacoes {
    constructor(codigo, titulo)
    {
        this.codigo = "";
        this.titulo = "";
    };

    getCodigo(){
        return this.codigo;
    };

    getTitulo(){
        return this.titulo;
    };

    setCodigo(codigo){
        this.codigo = codigo;
    };

    setTitulo(titulo){
        this.titulo = titulo;
    };

    CBOList(){
        return database.getData();
    };

    CBOBusc(codigo){
        const CBOs = this.CBOList();
        let CBOs_busc = {};

        CBOs.map(CBO => {
            if (CBO.codigo == codigo)
            {
                CBOs_busc = CBO;
            }
        });

        return CBOs_busc;
    };
}

module.exports = Ocupacoes;