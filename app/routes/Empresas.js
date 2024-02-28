const ControllersEmpresas = require("../controllers/ControllersEmpresas");

module.exports = (app) => {
    app.get('/empresas/list', (req, res) => {
        ControllersEmpresas.renderTableEmpresas(req, res);
    });

    app.get('/empresas/new', (req, res) => {
        ControllersEmpresas.renderFormEmpresas(req, res);
    });

    app.post('/empresas/new', (req, res) => {
        ControllersEmpresas.createEmpresa(req, res);
    });

    app.get('/empresas/delete/:id', (req, res) =>{
        ControllersEmpresas.deleteEmpresa(req,res);
    })
};