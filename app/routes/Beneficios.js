const ControllersBeneficios = require("../controllers/ControllersBeneficios");

module.exports = (app) =>{
    app.get('/beneficios/new', (req, res) => {
        ControllersBeneficios.renderFormBeneficios(req, res);
    });

    app.post('/beneficios/new', (req, res) => {
        ControllersBeneficios.createBeneficios(req, res);
    });

    app.get('/beneficios/delete/:id', (req, res) => {
        ControllersBeneficios.deleteBeneficios(req, res);
    });
}