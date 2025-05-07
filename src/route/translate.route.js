const express = require('express');
const router = express.Router();

const TranslateController = require('../controller/translate.controller');

router.post('/translate', TranslateController.TranslateText);

module.exports = router;