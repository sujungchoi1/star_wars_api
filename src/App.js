import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import Form from './components/Form';
import People from './components/People';
import Planet from './components/Planet';

function App() {
  return (
    <div className="App">
      {/* <h1>The Star Wars API</h1> */}
      <Router>
        <Form path="/" />
        <People path="/people/:id" />
        <Planet path="/planet/:id" />
        {/* <Error path="/error" /> */}
      </Router>
     
    </div>
  );
}

export default App;

