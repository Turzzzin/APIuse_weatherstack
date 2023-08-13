require('dotenv').config();
const express = require('express');
const routes = require('./src/routes.js');

const server = express();
const PORT = 3000;

// Configurar o diretório estático (pasta public)
server.use(express.static('public'));

server.use(routes);

server.listen(PORT, () => {
    console.log(`O servidor está rodando na porta https://localhost:${PORT}`);
});