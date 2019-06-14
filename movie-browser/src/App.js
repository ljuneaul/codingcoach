/* eslint-disable no-unused-vars */
import React from 'react'
import CardContainer from './view/CardContainer'
import FeaturedMovie from './view/FeaturedMovie'
import ApiReader from './model/ApiReader';

// *** constant(s)
const url = 'https://ghibliapi.herokuapp.com/films'

// TODO: makes button working

// *** Actual App
class App extends React.Component {
  state = {movies: [], movie: {}, btnTxt: "View all"};

  // *** running ApiReader when mounted
  componentDidMount() {
    this.fetchData();
  }

  handleClickButton = () => {
    if (this.state.btnTxt === "View all") {
      this.setState({
        btnTxt: "Hide all"
      })
    } else {
      this.setState({
        btnTxt: "View all"
      })
    }
  }

  async fetchData() {
    const data = await ApiReader(url)
    
    this.setState({ movies: data.moviesData });
    this.setState({ movie: data.featuredMovieData });
  }

  // *** display
  render() {
    const { movies, movie, btnTxt } = this.state;
    console.log(movies);
    return (
      <div>
        <FeaturedMovie movie={movie}  />
        <CardContainer movies={movies}  />
        <button onClick={this.handleClickButton}>{ btnTxt }</button>
      </div>
    )
  }
}

export default App
