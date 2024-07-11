import React, { useState } from 'react';

function Books() {
  const [selectedGenre, setSelectedGenre] = useState('');

  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
  };

  return (
    <div>
      <h1>Books</h1>
      <label htmlFor="genre">Choose a genre:</label>
      <select id="genre" value={selectedGenre} onChange={handleGenreChange}>
        <option value="">Select...</option>
        <option value="anime">Anime</option>
        <option value="horror">Horror</option>
        <option value="animation">Animation</option>
        <option value="romance">Romance</option>
        <option value="fiction">Fiction</option>
        <option value="sci-fi">Science Fiction</option>
        
      </select>

      <p>Selected Genre: {selectedGenre}</p>
      {/* You can display books based on the selected genre */}
    </div>
  );
}

export default Books;
