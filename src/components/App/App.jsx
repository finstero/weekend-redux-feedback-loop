import React from 'react';
import axios from 'axios';
import './App.css';

// router for different pages
import { Route, HashRouter as Router } from "react-router-dom";

// material ui


// components
import Feeling from '../Feeling/Feeling';
import Home from '../Home/Home';
import Understanding from '../Understanding/Understanding';
import Submission from '../Submission/Submission';

function App() {



    return (
        <Router>
            <div className='App'>
                <header className='App-header'>
                    <h1 className='App-title'>Feedback!</h1>
                </header>
                <Route path='/' exact>
                    <Home />
                </Route>
                <Route path='/feeling'>
                    <Feeling />
                </Route>
                <Route path='/understanding'>
                    <Understanding />
                </Route>
                <Route path='/supported'>
                    <h2>How well are you being supported?</h2>
                </Route>
                <Route path='/comments'>
                    <h2>Any comments?</h2>
                </Route>
                <Route path='/review'>
                    <h2>Review Your Feedback</h2>
                </Route>
                <Route path='/submission'>
                    <Submission />
                </Route>
            </div>
        </Router>
    );
}

export default App;
