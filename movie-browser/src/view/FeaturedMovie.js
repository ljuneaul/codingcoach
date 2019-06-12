import React from 'react';
import CardDetail from './CardDetail.js'

// toggle: https://stackoverflow.com/questions/29913387/show-hide-components-in-reactjs
class FeaturedMovie extends React.Component{
  state = {isDetailShown: false}

  handleClick = () => {
    this.setState(preState => ({isDetailShown: !preState.isDetailShown}));
    console.log('clicked')
  }

  render() {
    const { movie } = this.props;
    const { title, iDonotExist = 'blala', director, release_date, isDetailShown } = movie
    return (
      <div className="card" onClick={() => this.handleClick()}>
          <div className="row card-body">
            <div className="col-sm-6">
              <h5 className="card-title"> { title} - {iDonotExist } </h5>
              <p className="card-text"> { director } ({ release_date }) </p>
              { isDetailShown ? <CardDetail { ...(this.props) }/> : null}
            </div>
          <img className="col-sm-6" src="https://via.placeholder.com/200x100.png" alt="sans"/>
        </div>
      </div>
    );
  }
}

FeaturedMovie.defaultProps = {
  movie: { title : 'test title', director: 'Max'}
}


export default FeaturedMovie;
