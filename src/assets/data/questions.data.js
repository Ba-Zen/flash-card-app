const Question_Data = {
  frontend: {
    id: 1,
    react: [
      {
        id: 1,
        question: 'What is React?',
        answer: `A declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called 'components'.`
      },
      {
        id: 2,
        question: 'What is a component in React?',
        answer: `A small, reusable piece of code that return a React element to be rendered to the page.A component can be a Javascript function or an ES6 class.`
      },
      {
        id: 3,
        question: 'What are props?',
        answer: `Arbitrary inputs passed as a single object to a component. When React sees an element representing a user-defined component, it passes JSX attributes to this component as a single object. We call this object "props".`
      },
      {
        id: 4,
        question: 'What is conditional rendering?',
        answer: `Rendering or not rendering a component/segment of a component depending upon whether or not a condition is met. Conditional rendering is typically done with the ternary operator.`
      },
      {
        id: 5,
        question: 'What is a controlled component?',
        answer: `An element such as <input>, <textarea>, or <select> which do not maintain their own state, but rely on React's state to be the single source of truth.

                To control a component, you must:
                1. Set the value of the component to a corresponding property of the state.
                2. Provide an "onChange" method that updates the corresponding state value upon user input.`
      }
    ]
  }
};

export default Question_Data;
