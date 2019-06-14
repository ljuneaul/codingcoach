import React from 'react'

class CardDetail extends React.Component {
  render () {
    return (
      <div>
        <p className="card-text">producer: { this.props.producer }</p>
        <p className="card-text">rt_score: { this.props.rt_score }</p>
        <p className="card-text">{ this.props.description }</p>
      </div>
    )
  }
}

export default CardDetail
