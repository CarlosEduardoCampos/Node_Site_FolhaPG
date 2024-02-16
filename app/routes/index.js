module.exports = (app) =>{
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
}
