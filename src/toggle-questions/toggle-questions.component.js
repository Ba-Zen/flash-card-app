import React, { Component } from 'react';

class ToggleQuestions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isHidden: true
    };
  }

  handleToggle = e => {
    e.preventDefault();
    this.setState({
      isHidden: !this.state.isHidden
    });
  };

  render() {
    const { question, answer } = this.props;
    const { isHidden } = this.state;
    return (
      <div>
        <h2>{question}</h2>
        {!isHidden && <p>{answer}</p>}
        {!isHidden ? (
          <button onClick={this.handleToggle}>Hide Answer</button>
        ) : (
          <button onClick={this.handleToggle}>Show Answer</button>
        )}
      </div>
    );
  }
}

export default ToggleQuestions;
