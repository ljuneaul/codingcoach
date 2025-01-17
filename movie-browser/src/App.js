import React, { Component } from "react";
import CardContainer from "./view/CardContainer";
import FeaturedMovie from "./view/FeaturedMovie";
import ViewAllButton from "./view/ViewAllButton";
import ApiReader from "./model/ApiReader";

// *** constant(s)
const url = "https://ghibliapi.herokuapp.com/films";

// *** Actual App
class App extends Component {
  state = {
    allMovies: [],
    featuredMovie: {},
    buttonText: "View all",
    viewAll: false
  };

  // *** running ApiReader when mounted
  async componentDidMount() {
    const { allMovies, featuredMovie } = await ApiReader(url);

    this.setState({ allMovies, featuredMovie });
  }

  handleClickButton = () => {
    const { buttonText, viewAll } = this.state;

    this.setState({
      buttonText: buttonText === "View all" ? "Hide all" : "View all",
      viewAll: !viewAll
    });
  };

  // *** display
  render() {
    const { allMovies, featuredMovie, buttonText, viewAll } = this.state;

    return (
      <div>
        <FeaturedMovie 
          movie={featuredMovie} />
        <CardContainer 
          movies={allMovies} 
          viewAll={viewAll} />
        <ViewAllButton 
          buttonText={buttonText}
          onClickHandler={this.handleClickButton} />
      </div>
    );
  }
}

export default App;
