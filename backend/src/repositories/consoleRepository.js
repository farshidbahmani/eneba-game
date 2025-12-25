const db = require('../config/db');
const tb = 'console';

const getAllConsole = async (query) => {
    // Implement query to fetch games from the database using parameterized queries
    const sql = `SELECT * FROM ${tb} WHERE title LIKE ?`;
    const [results] = await db.query(sql, [`%${query.title || ''}%`]);
    return results;
};

const getConsoleById = async (id) => {
    const sql = `SELECT * FROM ${tb} WHERE id = ?`;
    const [results] = await db.query(sql, [id]);
    return results[0];
};

const addConsole = async (gameData) => {
    const sql = `INSERT INTO ${tb} (title, genre, description) VALUES (?, ?, ?)`;
    const [result] = await db.query(sql, [gameData.title, gameData.genre, gameData.description]);
    return { id: result.insertId, ...gameData };
};

module.exports = { getAllConsole, getConsoleById, addConsole };