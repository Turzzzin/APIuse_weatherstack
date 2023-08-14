require('dotenv').config();
const express = require('express');
const axios = require('axios');
const { locationValidation, removeAccents, conditionsMapping, errorMessages, translatedCondition, weatherData, weatherInfo } = require('./utils.js');

const router = express.Router();

// Rota para página inicial
router.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
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
            const weatherData = response.data;
            const translatedCondition = conditionsMapping[weatherData.current.weather_descriptions[0]] || weatherData.current.weatherDescription[0]; 
            const weatherInfo = {
            location: weatherData.location,
            current: {
                temperature: weatherData.current.temperature,
                feelslike: weatherData.current.feelslike,
                weatherDescription: translatedCondition,
                humidity: weatherData.current.humidity,
                windSpeed: weatherData.current.wind_speed,
                weatherIcon: weatherData.current.weather_icons[0],
            }
};
         res.json(weatherInfo);
        })
        .catch(error => {
            res.status(500).json({ erro: 'Ocorreu um erro ao buscar informações sobre o tempo'});
        });
    }
});

module.exports = router;