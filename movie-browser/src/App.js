import React from 'react';
import Card from './Card.js'
import movie from './DummyMovieData.js'

// TODO: makes group of cards

const App = () => {
  return (
    <div>
      <Card {...movie}/>
    </div>
  );
}

export default App;
