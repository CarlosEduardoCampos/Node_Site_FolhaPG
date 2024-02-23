const Ocupacoes = require("../models/Ocupacoes");
const Empresas = require("./Empresas");

module.exports = (app) =>{

    // Rotas Navegação dados Empresas:
    Empresas(app);

    // Rota principal(HOME):
    app.get('/', (req, res) => {
        res.render('pages/index');
    });

    // Rota para login da aplicação:
    app.get('/Acess', (req, res) => {
        res.render('pages/login');
    });

    // Rota para Area adiministrativa:
    app.get('/Acess/System', (req, res) => {
        res.render('pages_admin/index');
    });

    // Rota para Cadastro de funcionario:
    app.get('/Cad/Fuc', (req, res) => {
        res.render('pages/cad_fuc');
    });

    // Rota para Cadastro de funcionario:
    app.get('/Cad/Admin', (req, res) => {
        res.render('pages/cad_admin');
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
