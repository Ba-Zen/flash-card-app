import React from 'react';

import Header from './components/header/header.component';
import Card from './components/card/card.component';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <h1>Flash Cards</h1>
      <Card />
    </div>
  );
}

export default App;
