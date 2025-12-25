# Game Search Application - Backend

## Description
A backend service for the Game Search Application that allows users to search for games, manage their favorites, and retrieve game details.

## Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd game-search-app/backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   Create a `.env` file in the root directory and add your database configuration:
   ```bash
   DB_HOST=localhost
   DB_USER=username
   DB_PASSWORD=password
   DB_NAME=games_db
   ```

## Usage
To run the application in development mode:
```bash
npm run dev
```

### API Endpoints
- `GET /api/games`: Retrieve a list of games.
- `POST /api/games`: Create a new game entry.
- `GET /api/games/:id`: Retrieve details of a specific game.
- `PUT /api/games/:id`: Update a specific game.
- `DELETE /api/games/:id`: Delete a specific game.

## ORM Implementation
- **Chosen ORM**: Sequelize
- **Database Structure**:
   - **Models**:
     - `Game`
     - `User`
   - **Relationships**:
     - A `User` can have many favorite `Games` (One-to-Many).
     - A `Game` can belong to multiple `Genres` (Many-to-Many).

### CRUD Operations
- **Create**: Uses `Game.create()` to insert new game records.
- **Read**: Uses `Game.findAll()` to fetch a list and `Game.findByPk()` to fetch a specific game.
- **Update**: Uses `Game.update()` to modify existing game records.
- **Delete**: Uses `Game.destroy()` to remove a game record.

## Configuration
- Ensure your database is running and the connection details are correctly set in the `.env` file.

## Contributing
If you would like to contribute to this project, please fork the repository and submit a pull request.

## License
This project is licensed under the MIT License.