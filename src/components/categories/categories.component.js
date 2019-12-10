import React from 'react';
import './categories.css';

import { Link } from 'react-router-dom';

function Categories() {
  return (
    <div className='categories-container'>
      <h3>Categories</h3>
      <h4>Frontend</h4>
      <a href='/'>React</a>
      <a href='/'>Javascript</a>
      <h4>Backend</h4>
      <a href='/'>Node JS</a>
      <a href='/'>Testing</a>
      <a href='/'>Security</a>
    </div>
  );
}

export default Categories;
