const express = require('express');
const { getGames, getGameById, addGame } = require('../controllers/gameController');
const router = express.Router();

// GET /games - Retrieve a list of games
router.get('/', getGames);

// GET /games/:id - Retrieve a specific game by ID
router.get('/:id', getGameById);

// POST /games - Add a new game
router.post('/', addGame);

module.exports = router;