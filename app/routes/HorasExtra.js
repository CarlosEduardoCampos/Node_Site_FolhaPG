const ControllersHorasExtra = require("../controllers/ControllersHorasExtra");

module.exports = (app) => {
    app.get('/horasextra/new/:id', (req, res) => {
        ControllersHorasExtra.renderFormHoras(req, res);
    });

    app.post('/horasextra/new/:id', (req, res) =>{
        ControllersHorasExtra.createHoras(req, res);
    });

    app.get('/horasextra/delete/:id/:id_horas', (req, res) =>{
        ControllersHorasExtra.deleteHoras(req, res);
    })
}