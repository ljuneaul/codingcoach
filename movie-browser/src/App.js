/* eslint-disable no-unused-vars */
import React from 'react'
import CardContainer from './CardContainer'
import ApiReader from './model/ApiReader';

// *** constant(s)
const url = 'https://ghibliapi.herokuapp.com/films'

// *** Actual App
class App extends React.Component {
  state = {movies: []};

  // *** running ApiReader when mounted
  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    const data = await ApiReader(url);
    this.setState({ movies: data });
  }

  // *** display
  render() {
    const { movies } = this.state;
    return (
      <div>
        <CardContainer movies={movies}  />
      </div>
    )
  }
}

export default App
