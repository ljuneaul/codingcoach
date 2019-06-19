import React from 'react';
import CardDetail from './CardDetail.js';

class Card extends React.Component{
  state = {showDetails: false};

  handleClick = () => {
    this.setState(preState => ({showDetails: !preState.showDetails}));
  }

  render() {
    return (
      <div className="col-12 col-sm-6 col-md-4
                      p-2">
        <div className="card border-secondary h-100" onClick={this.handleClick}>
          <div className="card-body p-2">
          <img className="card-img-top" 
            src="https://via.placeholder.com/200x100.png" 
            alt={this.props.title}
          />
            <h5 className="card-title"> {this.props.title} </h5>
            <p className="card-text"> 
              {this.props.director} ({this.props.release_date}) 
            </p>
            {this.state.showDetails ? <CardDetail {...(this.props)}/> : null}
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
