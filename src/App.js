import React from 'react';
import ReactDOM from 'react-dom';

import './App.css';
import Searchmovie from './searchmovie';

function App() {
        return (
          <div className="container">
            <h1 className="title">Movie Hunt</h1>
            <Searchmovie/>
          </div>
        );
}

export default App;
