const app = require('./app');
const PORT = 3100;
const databaseConfig = require('../config/database');


async function startServer() {
    databaseConfig()
    app.listen(PORT, (err) => {
        if (err) {
            return console.log(err)
        }
        console.log(`Servidor conectado na porta ${PORT}`)
    })
};

startServer();

module.exports = app;