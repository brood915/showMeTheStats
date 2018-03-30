const express = require('express');
const router = express.Router();
const ApiController = require('../controllers/ApiController');

/******* GET requests *********/

//PLAYERS DATA

router.get('/players', 
    ApiController.getPlayers);

module.exports = router;