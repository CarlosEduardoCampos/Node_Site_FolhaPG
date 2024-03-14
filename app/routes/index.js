const Ocupacoes = require("../models/Ocupacoes");
const Empresas = require("./Empresas");
const Logins = require("./Logins");
const Colaboradores = require("./Colaboradores");
const HorasExtra = require("./HorasExtra");

module.exports = (app) =>{

    // Rotas Navegação dados Empresas:
    Logins(app);
    Empresas(app);
    Colaboradores(app);
    HorasExtra(app);

    // Rota principal(HOME):
    app.get('/', (req, res) => {
        res.render('pages/index');
    });

    // Busca um codigo CBO:
    app.get('/Busc/CBO/:codigo?', (req, res) => {

        const codigo = req.params.codigo;
        const cbo = new Ocupacoes();

        if(codigo){
            res.contentType('application/json');
            res.send(cbo.CBOBusc(codigo));
            res.status(200);
        }
        else{
            res.contentType('application/json');
            res.send(cbo.CBOList());
            res.status(200);
        };
    });
        
}
