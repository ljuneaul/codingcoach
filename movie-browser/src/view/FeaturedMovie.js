import React from 'react';
import CardDetail from './CardDetail.js'

// TODO: makes toggle for detail view work. have no idea why it's not working for this one
// toggle: https://stackoverflow.com/questions/29913387/show-hide-components-in-reactjs
class FeaturedMovie extends React.Component{
  state = {isDetailShown: false}

  handleClick = () => {
    this.setState(preState => ({isDetailShown: !preState.isDetailShown}));
  }

  render() {
    const { movie, isDetailShown } = this.props;
    const { title, director, release_date } = movie
    
    return (
      <div className="card" onClick={this.handleClick}>
          <div className="row card-body">
            <div className="col-sm-6">
              <h5 className="card-title"> { title } </h5>
              <p className="card-text"> { director } ({ release_date }) </p>
              { isDetailShown ? <CardDetail { ...(this.props.movie) }/> : null}
            </div>
          <img className="col-sm-6" src="https://via.placeholder.com/300x150.png" alt="sans"/>
        </div>
      </div>
    );
  }
}

FeaturedMovie.defaultProps = {
  movie: { title : 'test title', director: 'Max'}
}

export default FeaturedMovie;
