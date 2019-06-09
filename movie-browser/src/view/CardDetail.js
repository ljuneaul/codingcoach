import React from 'react'

class CardDetail extends React.Component {
  render () {
    return (
      <div>
        <p>producer: { this.props.producer }</p>
        <p>rt_score: { this.props.rt_score }</p>
        <p>{ this.props.description }</p>
      </div>
    )
  }
}

export default CardDetail
