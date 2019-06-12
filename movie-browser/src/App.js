/* eslint-disable no-unused-vars */
import React from 'react'
import CardContainer from './CardContainer'
import ApiReader from './model/ApiReader';

// *** constant(s)
const url = 'https://ghibliapi.herokuapp.com/films'
const NoOfMovies = 6;

// TODO: fix sorting by year. have no idea why it works for score but not for year
// *** Actual App
class App extends React.Component {
  state = {movies: []};

  // *** running ApiReader when mounted
  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    const data = await ApiReader(url)
    data.sort((a, b) => b.rt_score - a.rt_score)
      .sort((a, b) => (b.year - a.year))
    data.length = NoOfMovies;   // limit number of data
    
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
