const gameService = require('../services/gameService');

// Retrieve a list of games
const getGames = async (req, res) => {
    try {
        const games = await gameService.findAllGames(req.query);
        res.json(games);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'error' });
    }
};

// Retrieve a specific game by ID
const getGameById = async (req, res) => {
    try {
        const game = await gameService.findGameById(req.params.id);
        if (!game) return res.status(404).json({ message: 'Game not found' });
        res.json(game);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'error' });
    }
};

// Add a new game
const addGame = async (req, res) => {
    try {
        const newGame = await gameService.createGame(req.body);
        res.status(201).json(newGame);
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: 'error' });
    }
};

module.exports = { getGames, getGameById, addGame };