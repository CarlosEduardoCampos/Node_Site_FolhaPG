const ControllersEmpresas = require("../controllers/ControllersEmpresas");

module.exports = (app) => {
    app.get('/list', (req, res) => {
        ControllersEmpresas.listEmpresas(app, req, res);
    });

    app.get('/new', (req, res) =>{
        ControllersEmpresas.newEmpresa(app, req, res);
    });
};