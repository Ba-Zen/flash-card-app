import React from 'react';
import './card.css';

import Question_Data from '../assets/data/questions.data';

class Card extends React.Component {
  constructor() {
    super();
    this.state = {
      showAnswer: false
    };
  }

  render() {
    console.log(Question_Data);
    return (
      <div className='card-container'>
        {Question_Data.frontend.questions.map(q => (
          <div key={q.id} className='card'>
            <h2>{q.question}</h2>
            <p>{q.answer}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Card;
