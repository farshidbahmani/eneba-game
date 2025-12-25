const express = require('express');
const gameRoutes = require('./src/routes/gameRoutes');
const errorHandler = require('./src/middlewares/errorHandler');
const rateLimiter = require('./src/middlewares/rateLimiter');
const { helmet, cors } = require('./src/config');

const app = express();

// Middleware
app.use(helmet()); // Security best practices
app.use(cors()); // Enable CORS
app.use(express.json()); // Body parser
app.use(rateLimiter); // Apply rate limiting

// Routes
app.use('/games', gameRoutes);

// Error handling middleware
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});