const ControllersEmpresas = require("../controllers/ControllersEmpresas");

module.exports = (app) => {
    // Lista de todas as empresas cadastradas:
    app.get('/empresas/list', (req, res) => {
        ControllersEmpresas.renderTableEmpresas(req, res);
    });

    // Formulario para criar uma nova empresa:
    app.get('/empresas/new', (req, res) => {
        ControllersEmpresas.renderFormCreateEmpresas(req, res);
    });

    // Formulario para editar uma empresa:
    app.get('/empresas/edit/:id', (req, res) => {
        ControllersEmpresas.renderFormEditEmpresa(req,res);
    });

    // Editar uma empresa que já exites:(EDIT)
    app.post('/empresas/edit/:id/:id_empresa', (req, res) => {
        ControllersEmpresas.updateEmpresa(req, res);
    });

    // Cria uma nova empresa:(CREATE)
    app.post('/empresas/new', (req, res) => {
        ControllersEmpresas.createEmpresa(req, res);
    });

    // Apaga o cadastro de uma empresa:(DELETE)
    app.get('/empresas/delete/:id', (req, res) =>{
        ControllersEmpresas.deleteEmpresa(req,res);
    })
};