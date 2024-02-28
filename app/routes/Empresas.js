const ControllersEmpresas = require("../controllers/ControllersEmpresas");

module.exports = (app) => {
    app.get('/empresas/list', (req, res) => {
        ControllersEmpresas.listEmpresas(app, req, res);
    });

    app.get('/empresas/new', (req, res) =>{
        ControllersEmpresas.newEmpresa(app, req, res);
    });
};