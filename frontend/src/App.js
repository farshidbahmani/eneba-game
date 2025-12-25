import React, { useState } from 'react';
import Header from './components/Header';
import GameSearch from './components/GameSearch';
import './App.css';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="App">
      <Header onSearch={handleSearch} />
      <GameSearch searchQuery={searchQuery} />
    </div>
  );
}

export default App;