import React from 'react';

const movie = {
  title: 'title name',
  description: 'movie description'
}

const Card = (props) => {
  return (
    <div className="card">
      <p> { props.title } </p>
      <p> { props.description } </p>
    </div>
  )
}

const App = () => {
  return (
    <div>
      Movie Browser
      <Card {...movie}/>
    </div>
  );
}

export default App;
