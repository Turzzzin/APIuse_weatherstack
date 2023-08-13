const { router } = require('./routes.js')

// Função para validar o input do usuário
function locationValidation(location) {
    const checkAccentLetters = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;
    const checkNumbers = /^\d+$/;

    return checkAccentLetters.test(location) || checkNumbers.test(location);
};

// Função para remover acentos do input do usuário
function removeAccents(location) {
    return location.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

// Mapeamento para tradução da 'descrição' do Tempo
const conditionsMapping = {
    'Clear': 'Céu limpo',
    'Partly cloudy': 'Parcialmente nublado',
    'Overcast': 'Nublado',
    'Mist': 'Neblina',
    'Patchy rain possible': 'Possibilidade de chuva',
    'Rain': 'Chuva',
    'Drizzle': 'Chuvisco',
    'Showers': 'Chuvas',
    'Heavy rain': 'Chuva intensa',
    'Light rain': 'Chuva fraca',
    'Thunderstorms': 'Tempestades',
    'Thunderstorm with rain': 'Temporais com chuva',
    'Thunderstorm with heavy rain': 'Temporais com chuva intensa',
    'Thunderstorm with light rain': 'Temporais com chuva fraca',
    'Snow': 'Neve',
    'Blizzard': 'Nevasca',
    'Fog': 'Nevoeiro',
    'Hail': 'Granizo',
    'Sleet': 'Aguaceiros',
    'Tornado': 'Tornado',
    'Sunny': 'Ensolarado',
    'Mostly clear': 'Predominantemente limpo',
    'Mostly cloudy': 'Predominantemente nublado',
    'Partly sunny': 'Parcialmente ensolarado',
    'Light snow showers': 'Chuvas fracas de neve',
    'Haze': "Névoa seca"
};

const translatedCondition = conditionsMapping[weatherData.current.weather_descriptions[0]] || weatherData.current.weatherDescription[0]; 

const weatherData = response.data

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

function errorMessages() {
    if(!locationValidation(location)) {
        res.status(422).json({ erro: 'Localização inválida. Insira apenas números ou apenas letras para a pesquisa.'});
    };
};

// Exportar
module.exports = {
    locationValidation,
    removeAccents,
    conditionsMapping,
    errorMessages,
    weatherData,
    translatedCondition,
    weatherInfo,
};