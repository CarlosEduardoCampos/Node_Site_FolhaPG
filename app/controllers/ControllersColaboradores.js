const Colaboradores = require("../models/Colaboradores");
const Beneficios = require("../models/Beneficios");
const path = require("path");
const ejs =require("ejs");
const pdf = require("html-pdf")

class ControllersColaboradores{
    constructor()
    {
        this.colaboradores = new Colaboradores();
        this.beneficios = new Beneficios();
    };

    // Renderiza uma lista dos colaboradores relacionados a empresa:
    renderTableColaboradores(req, res){
        this.colaboradores.read(
            (error, result) =>
            {
                // Confirmo se a requisição ao banco deu certo:(SE sim)
                if(!error)
                {
                    res.render("pages_admin/table_colaboradores",{colaboradores:result, id_empresa: req.params.id});
                }
                //(Se não)
                else {
                    return res.send(error);
                };
            },
            req.params.id
        );
    };

    // Renderiza o formulario de cadastro de colaboradores:
    renderFormColaboradores(req, res)
    {
        try {
            res.render("pages_admin/form_colaboradores", {action:`/colaboradores/new/${req.params.id}`, colaborador:[]});
        }
        catch (error)
        {
            return res.send(error);
        }

        /*
        this.beneficios.read((error, result) => {
            // Confirma se o query foi executada corretamente:(Se sim)
            if(!error){
                res.render("pages_admin/form_colaboradores", {id:req.params.id, beneficios:result});
            }
            else{
                return res.send(error);
            }
        });
        */
    };

    // Renderiza o formulario de editar colaboradores:
    renderFormEditColaboradores(req, res)
    {
        this.colaboradores.read((error, result) =>
            {
                // Confirma se a query foi executada corretamente:(Se sim)
                if(!error)
                {
                    res.render("pages_admin/form_colaboradores", {action:`/colaboradores/edit/${req.params.id}`, colaborador:result});
                }
                else{
                    return res.send(error);
                }
            },
            0,
            req.params.id
        );
    };

    //Cria um novo colaborador e renderiza a nova lista de colaboradores:
    createColaboradores(req, res)
    {
        this.colaboradores = new Colaboradores(
            0,
            req.body.nome,
            req.body.telefone,
            req.body.email,
            req.body.senha,
            0,
            0,
            req.body.cargo,
            req.body.salario,
            req.body.DT_admissao,
            '',
            req.params.id,
            req.body.FK_periodo,
            req.body.FK_turno
        );
        this.colaboradores.create((error, result) => 
        {
            // Comfirma se a query foi executada corretamente:(Se sim)
            if(!error){
                res.redirect('/colaboradores/list/' + req.params.id);
            }
            //(Se não)
            else{
                return res.send(error);
            };
        });
    };

    //Edita o cadastro de um colaborador e renderiza a nova lista de colaboradores:
    updateColaboradores(req, res)
    {
        this.colaboradores = new Colaboradores(
            req.body.ID_login,
            req.body.nome,
            req.body.telefone,
            req.body.email,
            req.body.senha,
            req.params.id,
            0,
            req.body.cargo,
            req.body.salario,
            req.body.DT_admissao,
            '',
            req.body.FK_empresa,
            req.body.FK_periodo,
            req.body.FK_turno
        );
        this.colaboradores.update((error, result) => 
        {
            // Comfirma se a query foi executada corretamente:(Se sim)
            if(!error){
                res.redirect('/colaboradores/list/' + req.body.FK_empresa);
            }
            //(Se não)
            else{
                return res.send(error);
            };
        });
    };

    // Apaga um cadastro de colaborador:
    deleteColaboradores(req, res)
    {
        this.colaboradores.delete(req.params.id, (error, result) => {
            // Comfirma se a query foi executada corretamente:(Se sim)
            if(!error){
                res.redirect('/colaboradores/list/' + req.params.id_empresa);
            }
            //(Se não)
            else{
                return res.send(error);
            };
        });
    };

    printColaboradores(req, res)
    {
        const filepath =  path.join(path.resolve(__dirname, '..'), "./views/components", "print.ejs");
        // Chama função que le a tabela de  colaboradores:
        this.colaboradores.read((error, result) => {
            // Verifica se a querry foi executada corretamente:(Se sim)
            if(!error)
            {
                ejs.renderFile(
                    filepath,
                    {colaboradores: result},
                    (error, result) => {
                        if(error)
                        {
                            return res.send('Erro na leitura do arquivo');
                        }
                        // Cofiguração de pdf folha A4:
                        const options = {
                            height: "11.25in",
                            width: "8.5in",
                            header:{
                                height: "20mm"
                            },
                            footer: {
                                height: "20mm"
                            }
                        }

                        // Criar o pdf:
                        pdf.create(result, options).toFile("report.pdf", (error, data) =>
                        {
                            if(error)
                            {
                                return res.send('Erro ao criar pdf');
                            }
                            // Enviar para o navegador:
                            return res.send(result);
                        });
                    }
                );
            } 
        }, req.params.id);
    }

    printStyleColaboradores(req, res)
    {
        const filepath =  path.join(path.resolve(__dirname, '..'), "./views/components", "print.ejs");
        // Chama função que le a tabela de  colaboradores:
        this.colaboradores.read((error, result) => {
            // Verifica se a querry foi executada corretamente:(Se sim)
            if(!error)
            {
                ejs.renderFile(
                    filepath,
                    {colaboradores: result},
                    (error, result) => {
                        if(error)
                        {
                            return res.send('Erro na leitura do arquivo');
                        }
                        
                        // Enviar para o navegador:
                        return res.send(result);
                    }
                );
            } 
        }, req.params.id);
    }
};

module.exports = new ControllersColaboradores();