import React from 'react';
import CardDetail from './CardDetail.js';

// toggle: https://stackoverflow.com/questions/29913387/show-hide-components-in-reactjs
class Card extends React.Component{
  state = {isDetailShown: false};

  handleClick = () => {
    this.setState(preState => ({isDetailShown: !preState.isDetailShown}));
  }

  render() {
    return (
      <div className="card col-4" onClick={ this.handleClick }>
        <img className="card-img-top" src="https://via.placeholder.com/200x100.png" alt={ this.props.title }/>
        <div className="card-body">
          <h5 className="card-title"> { this.props.title } </h5>
          <p className="card-text"> { this.props.director } ({ this.props.release_date }) </p>
          {this.state.isDetailShown ? <CardDetail { ...(this.props) }/> : null}
        </div>
      </div>
    );
  }
}

export default Card;
