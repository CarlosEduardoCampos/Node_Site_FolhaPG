const ControllersBeneficios = require("../controllers/ControllersBeneficios");

module.exports = (app) =>{
    app.get('/beneficios/new', (req, res) => {
        ControllersBeneficios.renderFormBeneficios(req, res);
    });

    app.post('/beneficios/new', (req, res) => {
        ControllersBeneficios.createBeneficios(req, res);
    });
}