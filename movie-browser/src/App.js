import React, { Component } from "react";
import CardContainer from "./view/CardContainer";
import FeaturedMovie from "./view/FeaturedMovie";
import ApiReader from "./model/ApiReader";

// *** constant(s)
const url = "https://ghibliapi.herokuapp.com/films";

// *** Actual App
class App extends Component {
  state = {
    allMovies: [],
    featuredMovie: {},
    buttonText: "View all"
  };

  // *** running ApiReader when mounted
  async componentDidMount() {
    const { allMovies, featuredMovie } = await ApiReader(url);

    this.setState({ allMovies, featuredMovie });
  }

  handleClickButton = () => {
    const { buttonText } = this.state;

    this.setState({
      buttonText: buttonText === "View all" ? "Hide all" : "View all"
    });
  };

  // *** display
  render() {
    const { allMovies, featuredMovie, buttonText } = this.state;

    return (
      <div>
        <FeaturedMovie movie={featuredMovie} />
        <CardContainer movies={allMovies} />
        <button onClick={this.handleClickButton}>{buttonText}</button>
      </div>
    );
  }
}

export default App;
