import React from 'react';
import './card.css';

import ToggleQuestions from '../toggle-questions/toggle-questions.component';
import Question_Data from '../../assets/data/questions.data';

class ReactQs extends React.Component {
  render() {
    return (
      <div className='card-container'>
        {Question_Data.frontend.react.map(q => (
          <div key={q.id} className='card'>
            <ToggleQuestions question={q.question} answer={q.answer} />
          </div>
        ))}
      </div>
    );
  }
}

export default ReactQs;
