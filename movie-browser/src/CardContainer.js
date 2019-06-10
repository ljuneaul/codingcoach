import React from 'react';
import Card from './view/Card';
import ApiReader from './model/ApiReader';
import { url } from './App';

export class CardContainer extends React.Component {
  state = {movies: []};

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    const data = await ApiReader(url);
    this.setState({ movies: data });
  }

  render() {
    const { movies } = this.state;
    return (
        <div className='row'>
            {this.state.movies.map(movie => 
                <Card key={movie.id} {...movie} />
            )}
        </div>
    )
  }
}
