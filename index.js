// Importando servidor configurado:
const app = require('./config/ServerDependencies')

// Importando rotas:
const appRoutes = require('./app/routes/index');
appRoutes(app);


const port = process.env.SERVER_PORT || 3000;

// Inicia o servidor:
app.listen(port, () => console.log(`127.0.0.1:${port}`));