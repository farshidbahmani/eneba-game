import React, { useEffect, useState } from 'react';
import GameCard from './GameCard';
import './GameSearch.css';

const GameSearch = ({ searchQuery = '' }) => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchGames = async (query = '') => {
    try {
      setLoading(true);
      const url = query 
        ? `http://eneba-gameapi.webhop.me/games/?title=${encodeURIComponent(query)}`
        : 'http://eneba-gameapi.webhop.me/games/';
      const response = await fetch(url);
      if (!response.ok) throw new Error('Failed to fetch games');
      const data = await response.json();
      setGames(data);
    } catch (err) {
      setError(`Failed to fetch games: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGames(searchQuery);
  }, [searchQuery]);

  if (loading && games.length === 0) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="game-search-container container">
      <div className="results-header">
        <h2>
          {searchQuery ? (
            <>Results found: {games.length} {games.length === 1 ? 'result' : 'results'} for "{searchQuery}"</>
          ) : (
            <>Results found: {games.length}</>
          )}
        </h2>
      </div>
      {loading && games.length > 0 && (
        <div className="loading">Searching...</div>
      )}
      {!loading && games.length > 0 && (
        <div className="game-grid">
          {games.map(game => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      )}
      {!loading && games.length === 0 && searchQuery && (
        <div className="no-results">
          No games found matching "{searchQuery}"
        </div>
      )}
      {!loading && games.length === 0 && !searchQuery && (
        <div className="no-results">No games found</div>
      )}
    </div>
  );
};

export default GameSearch;