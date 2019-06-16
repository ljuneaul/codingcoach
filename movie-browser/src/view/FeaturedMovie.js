import React from 'react';
import CardDetail from './CardDetail.js'

class FeaturedMovie extends React.Component{
  state = {showDetails: false}

  handleClick = () => {
   
    this.setState(preState => ({showDetails: !preState.showDetails}));
  }

  render() {
    const { movie } = this.props;
    const { showDetails } = this.state
    const { title, director, release_date } = movie
    
    return (
      <div className="card border-secondary m-2" onClick={this.handleClick}>
          <div className="row card-body py-1">
            <img className="col-sm-6 p-1" 
              src="https://via.placeholder.com/300x150.png" alt={title}/>
            <div className="col-sm-6">
              <h5 className="card-title"> {title} </h5>
              <p className="card-text"> {director} ({release_date}) </p>
              {showDetails ? <CardDetail {...(this.props.movie)}/> : null}
            </div>
        </div>
      </div>
    );
  }
}

FeaturedMovie.defaultProps = {
  movie: { title : 'test title', director: 'Max'}
}

export default FeaturedMovie;
