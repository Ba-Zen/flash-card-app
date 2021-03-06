import React from 'react';

import Header from './components/header/header.component';
import Card from './components/card/card.component';
import Categories from './components/categories/categories.component';
import HomePage from './components/homepage/homepage.component';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <h1>Flash Cards</h1>
      <div className='page-containter'>
        <HomePage />
        <Categories />
        <Card />
      </div>
    </div>
  );
}

export default App;
