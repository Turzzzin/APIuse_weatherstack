const express = require('express');
const axios = require('axios');
const { locationValidation, removeAccents, translatedConditions } = require('./utils.js');

const router = express.Router();