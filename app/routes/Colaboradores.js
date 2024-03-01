const ControllersColaboradores = require("../controllers/ControllersColaboradores");

module.exports = (app) => {
    app.get('/colaboradores/list/:id', (req, res) => {
        ControllersColaboradores.renderTableColaboradores(req, res);
    });

    app.get('/colaboradores/new/:id', (req,res) => {
        ControllersColaboradores.renderFormColaboradores(req, res);
    });

    app.post('/colaboradores/new/:id', (req,res) => {
        ControllersColaboradores.createColaboradores(req, res);
    });

    app.get('/colaboradores/delete/:id/:id_empresa', (req, res) => {
        ControllersColaboradores.deleteColaboradores(req, res);
    });
};