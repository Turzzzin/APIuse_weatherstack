require('dotenv').config();
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
        const apiUrl = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${locationWithoutAccent}`;

        axios.get(apiUrl) .then(response => {
            weatherData;
            translatedCondition;
            weatherInfo;
        
         res.json(weatherInfo);
        })
        .catch(error => {
            res.status(500).json({ erro: 'Ocorreu um erro ao buscar informações sobre o tempo'});
        });
    }
});

module.exports = router;