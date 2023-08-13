const express = require('express');
const axios = require('axios');
require('dotenv').config();

const server = express();
const PORT = 3000;

// Configurar o diretório estático (pasta public)
server.use(express.static('public'));

