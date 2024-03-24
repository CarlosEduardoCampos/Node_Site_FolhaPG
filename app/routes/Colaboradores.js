const ControllersColaboradores = require("../controllers/ControllersColaboradores");
const puppeteer = require("puppeteer")
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

    app.get('/colaboradores/edit/:id', (req, res) =>{
        ControllersColaboradores.renderFormEditColaboradores(req, res);
    });

    app.post('/colaboradores/edit/:id', (req, res) =>{
        ControllersColaboradores.updateColaboradores(req, res);
    });

    app.get('/colaboradores/delete/:id/:id_empresa', (req, res) => {
        ControllersColaboradores.deleteColaboradores(req, res);
    });

    app.get('/colaboradores/horas', (req, res) => {
        ControllersColaboradores.renderFormHoras(req, res);
    });
    app.get('/colaboradores/print/:id', (req, res) => {
        ControllersColaboradores.printColaboradores(req, res);
    });
    app.get('/colaboradores/style/print/:id', async (req, res) => {
        // Abrindo uma nova pagina do navegador:
        const browser = await puppeteer.launch({headless:false});
        const page = await browser.newPage();

        await page.goto('http://127.0.0.1:4755/colaboradores/print/'+ req.params.id, {
            waitUntil: 'networkidle0'
        });

        // Configurando estilo do pdf:
        const pdf = await page.pdf({
            printBackground: true,
            format: 'Letter',
            margin: {
                top: "20px",
                bottom: "40px",
                left: "20px",
                right: "20px"
            }
        });

        await browser.close();

        res.contentType("application/pdf");
        return res.send(pdf);
        //ControllersColaboradores.printStyleColaboradores(req, res);
    });
};