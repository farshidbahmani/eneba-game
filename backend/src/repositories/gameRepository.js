const db = require('../config/db');
const tb = 'games';

const getAllGames = async (query) => {
    // Implement query to fetch games from the database using parameterized queries
    const sql = `SELECT * FROM ${tb} WHERE title LIKE ?`;
    const [results] = await db.query(sql, [`%${query.title || ''}%`]);
    return results;
};

const getGameById = async (id) => {
    const sql = `SELECT * FROM ${tb} WHERE id = ?`;
    const [results] = await db.query(sql, [id]);
    return results[0];
};

const addGame = async (gameData) => {
    const sql = `INSERT INTO ${tb} (title, genre, description) VALUES (?, ?, ?)`;
    const [result] = await db.query(sql, [gameData.title, gameData.genre, gameData.description]);
    return { id: result.insertId, ...gameData };
};

module.exports = { getAllGames, getGameById, addGame };