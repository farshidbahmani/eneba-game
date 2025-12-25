const gameRepository = require('../repositories/gameRepository');

const findAllGames = async (query) => {
    // Logic for filtering games based on query parameters
    return await gameRepository.getAllGames(query);
};

const findGameById = async (id) => {
    return await gameRepository.getGameById(id);
};

const createGame = async (gameData) => {
    return await gameRepository.addGame(gameData);
};

module.exports = { findAllGames, findGameById, createGame };