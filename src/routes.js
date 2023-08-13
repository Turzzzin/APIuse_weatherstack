const express = require('express');
const axios = require('axios');
const { locationValidation, removeAccents, conditionsMapping, errorMessages, translatedCondition, weatherData, weatherInfo } = require('./utils.js');

const router = express.Router();

// Rota para página inicial
router.get('/', (req, res) => {
    res.sendFile(__dirname + './views/index.html');
});

// Rota para obter as informações do tempo
router.get('/weather', (req, res) => {
    const { location } = req.query;
    if(!locationValidation(location)) {
        errorMessages();
    } else {
        const locationWithoutAccent = removeAccents(location);
        const apiKey = process.env.api_key;
    }
});

module.exports = router;