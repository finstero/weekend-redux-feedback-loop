import React from 'react';
import axios from 'axios';
import './App.css';

// router for different pages
import { Route, HashRouter as Router } from "react-router-dom";

// componenets

// material ui
import Button from '@material-ui/core/Button';


function App() {

  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>
        <Route path='/' exact>
          <h2>Ready?</h2>
          <Button variant="outlined">Start</Button>
        </Route>
        <Route path='/feeling'>
          <h2>How are you feeling today?</h2>
        </Route>
        <Route path='/understanding'>
          <h2>How well are you understanding the content?</h2>
        </Route>
        <Route path='/supported'>
          <h2>How well are you being supported?</h2>
        </Route>
        <Route path='/comments'>
          <h2>Any comments?</h2>
        </Route>
      </div>
    </Router>
  );
}

export default App;
