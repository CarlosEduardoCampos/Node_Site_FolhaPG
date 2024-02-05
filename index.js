// Importando servidor configurado:
const app = require('./config/ServerDependencies')

// Importando rotas:
//const appRoutes = require('./app/routes/index');

// Rota principal(HOME):
app.get('/', (req, res) => {
    res.render('pages/index');
});

const port = process.env.SERVER_PORT;

// Inicia o servidor:
app.listen(port, () => console.log(`127.0.0.1:${port}`));