const ControllersColaboradores = require("../controllers/ControllersColaboradores");

module.exports = (app) => {
    app.get('/colaboradores/list/:id', (req, res) => {
        ControllersColaboradores.renderListColaboradores(app, req, res);
    });
};