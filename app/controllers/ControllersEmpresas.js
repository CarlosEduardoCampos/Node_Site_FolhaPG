const Empresas = require("../models/Empresas");

class ControllersEmpresas{
    constructor(){
        this.empresa = new Empresas();
    };

    // Renderisa lista de todas as empresas cadastradas:
    renderTableEmpresas(req, res){
        this.empresa.read((error, result) => {
            // Confirma se a requisição ao banco deu certo:(Se sim)
            if(!error){
                res.render("pages_admin/table_empresas",{empresas:result})
            }
            //(Se não)
            else{
                console.log(error);
            };   
        });
    };

    // Renderisa Formulario para cadastro de uma empresa:
    renderFormCreateEmpresas(req, res){
        try {
            res.render("pages/cad_empresa");
        }
        catch (error) {
            console.log(error);
        };
    };

    // Rederisa formulario para editar uma empresa:
    renderFormEditEmpresa(req, res){
        this.empresa.read(
            (error, result) => {
                // Confirma se a query foi executada corretamente:(Se sim)
                if(!error){
                    res.render("pages_admin/form_empresa", {id: req.params.id, empresa: result});
                }
                else{
                    console.log(error);
                }
            },
            req.params.id
        );
    };

    // Cadastra uma nova empresa e renderisa a lista de empresas:
    createEmpresa(req, res){
        // Relaciona os dados vindos da requisição ao objeto:
        this.empresa = new Empresas(
            0,
            req.body.nome,
            req.body.telefone, 
            req.body.email,
            req.body.senha,
            0,
            0,
            req.body.cnpj
        );

        // Chama função de cadastro:
        this.empresa.create((error, result) => {
            // Confirma se a query foi executada corretamente:(Se sim)
            if(!error){
                res.redirect('/Acess/System');
            }
            //(Se sim)
            else{
                console.log(error);
            };   
        });
    };

    // Edita uma empresa que já existe:
    updateEmpresa(req, res)
    {
        this.empresa = new Empresas(
            req.params.id,
            req.body.nome,
            req.body.telefone,
            req.body.email,
            '',
            0,
            req.params.id_empresa,
            req.body.cnpj
        );
        this.empresa.update((error, result) => {
            // Comfirma se a query foi executada corretamente:(Se sim)
            if(!error){
                res.redirect('/Acess/System');
            }
            //(Se não)
            else{
                console.log(error);
            }
        });
    }

    // Apaga uma empresa do banco de dados:
    deleteEmpresa(req, res){
        // Chama função que apaga um cadastro:
        this.empresa.delete(req.params.id, (error, result) => {
            // Comfirma se a query foi executada corretamente:(Se sim)
            if(!error){
                res.redirect('/empresas/list');
            }
            //(Se não)
            else{
                console.log(error);
            }
        });
    };
};

module.exports = new ControllersEmpresas();