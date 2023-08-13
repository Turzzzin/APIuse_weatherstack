const express = require('express');
const axios = require('axios');
const { locationValidation, removeAccents, translatedConditions } = require('./utils.js');

const router = express.Router();

// Rota para página inicial
router.get('/', (req, res) => {
    res.sendFile(__dirname + './views/index.html');
});

// Rota para obter as informações do tempo
router.get('/weather', (req, res) => {
    const { location } = req.query;
    
});