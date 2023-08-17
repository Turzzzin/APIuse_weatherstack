const routes = require('./routes.js');
require('dotenv').config();
const express = require('express');

const server = express();
const PORT = 80;

// Configurar o diretório estático (pasta public)
server.use(express.static('public'));

server.use(routes);

server.listen(PORT, () => {
    console.log(`O servidor está rodando na porta https://localhost:${PORT}`);
});