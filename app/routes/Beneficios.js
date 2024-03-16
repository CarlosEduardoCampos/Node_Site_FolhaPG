const ControllersBeneficios = require("../controllers/ControllersBeneficios");

module.exports = (app) =>{
    app.get('/beneficios/new/:id', (req, res) => {
        ControllersBeneficios.renderFormBeneficios(req, res);
    });
}