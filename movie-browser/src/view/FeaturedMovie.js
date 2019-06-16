import React from 'react';
import CardDetail from './CardDetail.js'

// TODO: makes toggle for detail view work. have no idea why it's not working for this one
// toggle: https://stackoverflow.com/questions/29913387/show-hide-components-in-reactjs
class FeaturedMovie extends React.Component{
  state = {shouldShowDetails: false}

  handleClick = () => {
   
    this.setState(preState => ({shouldShowDetails: !preState.shouldShowDetails}));
  }

  render() {
    const { movie } = this.props;
    const { shouldShowDetails } = this.state
    const { title, director, release_date } = movie
    
    return (
      <div className="card" onClick={this.handleClick}>
          <div className="row card-body">
            <img className="col-sm-6" src="https://via.placeholder.com/300x150.png" alt={title}/>
            <div className="col-sm-6">
              <h5 className="card-title"> {title} </h5>
              <p className="card-text"> {director} ({release_date}) </p>
              {shouldShowDetails ? <CardDetail {...(this.props.movie)}/> : null}
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
