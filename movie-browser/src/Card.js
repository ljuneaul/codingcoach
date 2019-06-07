import React from 'react';

// toogle: https://stackoverflow.com/questions/29913387/show-hide-components-in-reactjs
class Card extends React.Component{
    state = {isDetailShown: false} // status not working

    handleClick = () => {
        this.setState(preState => ({isDetailShown: !preState.isDetailShown}));
    }

    render() {
        return (
            <div className="card col-6" onClick={() => this.handleClick()}>
                <img className="card-img-top" src="https://via.placeholder.com/200x100.png" alt={this.props.title}/>
                <div className="card-body">
                    <h5 className="card-title"> { this.props.title } </h5>
                    <p className="card-text"> { this.props.director } ({ this.props.release_date }) </p>
                    {this.state.isDetailShown ? <CardDetail { ...(this.props) }/> : null}
                </div>
            </div>
        );
    }
}

class CardDetail extends React.Component {
    render() {
        return (
            <div>
                <p>producer: { this.props.producer }</p>
                <p>rt_score: { this.props.rt_score }</p>
                <p>{ this.props.description }</p>
                {/* TODO: loop through people, spacies + should I get locations/vehicles? */}
            </div>
        );
    }
}

export default Card;