const Colaboradores = require("../models/Colaboradores");
const Beneficios = require("../models/Beneficios");
const fs = require('fs');

class ControllersColaboradores{
    constructor(){
        this.colaboradores = new Colaboradores();
        this.beneficios = new Beneficios();
    };

    // Renderiza uma lista dos colaboradores relacionados a empresa:
    renderTableColaboradores(req, res){
        this.colaboradores.read(
            (error, result) => {
                // Confirmo se a requisição ao banco deu certo:(SE sim)
                if(!error){
                    res.render("pages_admin/table_colaboradores",{colaboradores:result, id_empresa: req.params.id});
                }
                //(Se não)
                else{
                    console.log(error);
                };
            },
            req.params.id
        );
    };

    // Renderiza o formulario de cadastro de colaboradores:
    renderFormColaboradores(req, res){
        try {
            res.render("pages_admin/form_colaboradores", {action:`/colaboradores/new/${req.params.id}`, colaborador:[]});
        }
        catch (error) {
            console.log(error);
        }

        /*
        this.beneficios.read((error, result) => {
            // Confirma se o query foi executada corretamente:(Se sim)
            if(!error){
                res.render("pages_admin/form_colaboradores", {id:req.params.id, beneficios:result});
            }
            else{
                console.log(error);
            }
        });
        */
    };

    // Renderiza o formulario de editar colaboradores:
    renderFormEditColaboradores(req, res){
        this.colaboradores.read(
            (error, result) => {
                // Confirma se a query foi executada corretamente:(Se sim)
                if(!error){
                    res.render("pages_admin/form_colaboradores", {action:`/colaboradores/edit/${req.params.id}`, colaborador:result});
                }
                else{
                    console.log(error);
                }
            },
            0,
            req.params.id
        );
    };

    //Cria um novo colaborador e renderiza a nova lista de colaboradores:
    createColaboradores(req, res){
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
        this.colaboradores.create((error, result) => {
            // Comfirma se a query foi executada corretamente:(Se sim)
            if(!error){
                res.redirect('/colaboradores/list/' + req.params.id);
            }
            //(Se não)
            else{
                console.log(error);
            };
        });
    };

    //Edita o cadastro de um colaborador e renderiza a nova lista de colaboradores:
    updateColaboradores(req, res){
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
        this.colaboradores.update((error, result) => {
            // Comfirma se a query foi executada corretamente:(Se sim)
            if(!error){
                res.redirect('/colaboradores/list/' + req.body.FK_empresa);
            }
            //(Se não)
            else{
                console.log(error);
            };
        });
    };

    // Apaga um cadastro de colaborador:
    deleteColaboradores(req, res){
        this.colaboradores.delete(req.params.id, (error, result) => {
            // Comfirma se a query foi executada corretamente:(Se sim)
            if(!error){
                res.redirect('/colaboradores/list/' + req.params.id_empresa);
            }
            //(Se não)
            else{
                console.log(error);
            };
        });
    };

    printColaboradores(req, res){
        /*
        const pdfmake = require('pdfmake');
        const printer = new pdfmake({
        Roboto: {
            normal: './app/public/fonts/Roboto_Slab/static/RobotoSlab-Regular.ttf',
            bold: './app/public/fonts/Roboto_Slab/static/RobotoSlab-Medium.ttf',
            italics: './app/public/fonts/Roboto_Slab/static/RobotoSlab-Italic.ttf',
            bolditalics: './app/public/fonts/Roboto_Slab/static/RobotoSlab-MediumItalic.ttf'
        }
        });

        let funcionarios = [
        { nome: 'Funcionario 1', cargo: 'Cargo 1' },
        { nome: 'Funcionario 2', cargo: 'Cargo 2' },
        // adicione mais funcionários conforme necessário
        ];

        let corpo = funcionarios.map(f => [f.nome, f.cargo]);

        let docDefinition = {
        content: [
            { text: 'Lista de Funcionários', style: 'header' },
            {
            table: {
                body: [['Nome', 'Cargo'], ...corpo]
            }
            }
        ],
        styles: {
            header: {
            fontSize: 18,
            bold: true,
            margin: [0, 0, 0, 10]
            }
        }
        };

        let pdfDoc = printer.createPdfKitDocument(docDefinition);
        pdfDoc.pipe(fs.createWriteStream('Lista_de_Funcionarios.pdf'));
        res.redirect('Lista_de_Funcionarios.pdf');
        pdfDoc.end();
        */

        (async () => {
            const browser = await puppeteer.launch();
            const page = await browser.newPage();
        
            // Defina seu HTML aqui. Eu estou usando uma tabela simples para este exemplo.
            const content = `
                <html>
                <body>
                    <table>
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Telefone</th>
                        <th>Cargo</th>
                    </tr>
                    <tr>
                        <td>João Silva</td>
                        <td>joao.silva@empresa.com.br</td>
                        <td>(31) 98765-4321</td>
                        <td>Gerente</td>
                    </tr>
                    <!-- Adicione mais colaboradores conforme necessário -->
                    </table>
                </body>
                </html>
            `;
        
            await page.setContent(content);
            await page.pdf({ path: 'lista_de_colaboradores.pdf', format: 'A4' });
        
            //await browser.close();
        })();
    }
};

module.exports = new ControllersColaboradores();