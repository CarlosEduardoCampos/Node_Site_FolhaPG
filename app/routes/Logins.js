module.exports = (app) =>{
    // Rota para login da aplicação:
    app.get('/Acess', (req, res) => {
        res.render('pages/login');
    });

    // Rota para Area adiministrativa:
    app.get('/Acess/System', (req, res) => {
        res.render('pages_admin/index');
    });
};