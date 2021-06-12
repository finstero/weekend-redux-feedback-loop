import React from 'react';
import axios from 'axios';
import './App.css';

// router for different pages
import { Route, HashRouter as Router } from "react-router-dom";

// material ui


// components
import Home from '../Home/Home';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import ThankYou from '../ThankYou/ThankYou';

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
                <Route path='/support'>
                    <Support />
                </Route>
                <Route path='/comments'>
                    <Comments />
                </Route>
                <Route path='/review'>
                    <Review />
                    <h2>Review Your Feedback</h2>
                </Route>
                <Route path='/thankyou'>
                    <ThankYou />
                </Route>
            </div>
        </Router>
    );
}

export default App;
