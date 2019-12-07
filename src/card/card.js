import React from 'react';
import './card.css';

class Card extends React.Component {
  constructor() {
    super();
    this.state = {
      showAnswer: false
    };
  }

  render() {
    return <div className='card'></div>;
  }
}

export default Card;
