import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import GridView from './components/GridView';
import TileView from './components/TileView';
import DetailedView from './components/DetailedView';

function App() {
  const [view, setView] = useState('grid');
  const [selectedTile, setSelectedTile] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=100')
      .then((response) => response.json())
      .then((data) => setData(data.results))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleTileClick = (item) => {
    setSelectedTile(item);
    setView('detail');
  };

  const handleBackToTiles = () => {
    setView('tile');
  };

  return (
    <div className="App bg-gradient-to-r from-indigo-900">
      <Header setView={setView} />
      {view === 'grid' && <GridView data={data} onTileClick={handleTileClick} />}
      {view === 'tile' && <TileView data={data} onTileClick={handleTileClick} />}
      {view === 'detail' && <DetailedView item={selectedTile} onBack={handleBackToTiles} />}
    </div>
  );
}

export default App;
