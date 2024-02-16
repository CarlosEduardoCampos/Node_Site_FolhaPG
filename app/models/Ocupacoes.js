const TempData = require("../TempDB/TemDB");
const database = new TempData("Ocupacoes");

class Ocupacoes {
    constructor(codigo, titulo)
    {
        this.codigo = codigo;
        this.titulo = titulo;
    }
    Ocupacoes(){
        this.codigo = "";
        this.titulo = "";
    }

    getCodigo(){
        return this.codigo;
    }

    getTitulo(){
        return this.titulo;
    }

    setCodigo(codigo){
        this.codigo = codigo;
    }

    setTitulo(titulo){
        this.titulo = titulo;
    }

    CBOList(){
        return database.getData();
    }
}