/* eslint-disable no-unused-vars */
import React from 'react'
import CardContainer from './view/CardContainer'
import FeaturedMovie from './view/FeaturedMovie'
import ApiReader from './model/ApiReader';

// *** constant(s)
const url = 'https://ghibliapi.herokuapp.com/films'
const btnTxtDef = "View all"

// TODO: fix sorting by year. have no idea why it works for score but not for year
// TODO: makes button working

// *** Actual App
class App extends React.Component {
  state = {movies: [], featuredMovieIndex: 0, btnTxt: btnTxtDef};

  // *** running ApiReader when mounted
  componentDidMount() {
    this.fetchData();
  }

  pickRandomMovieIndex = () => this.setState({
    featuredMovieIndex: Math.floor(Math.random() * this.state.movies.length)
  })

  handleClickButton = () => {
    if (this.state.btnTxt === btnTxtDef) {
      this.setState({
        btnTxt: "hide all"
      })
    } else {
      this.setState({
        btnTxt: btnTxtDef
      })
    }
    
  }

  async fetchData() {
    const data = await ApiReader(url)

    data.sort((a, b) => b.rt_score - a.rt_score)
      .sort((a, b) => b.year - a.year)
    
    this.setState({ movies: data });
    this.pickRandomMovieIndex();
  }

  // *** display
  render() {
    const { movies, featuredMovieIndex, btnTxt } = this.state;

    return (
      <div>
        <FeaturedMovie movie={movies[featuredMovieIndex]}  />
        <CardContainer movies={movies}  />  {/* limit number of data */}
        <button onClick={this.handleClickButton}>{ btnTxt }</button>
      </div>
    )
  }
}

export default App
