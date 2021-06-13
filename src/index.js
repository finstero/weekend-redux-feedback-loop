import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// feedback reducer storing individual set of feedback input (from different routes) as feedback properties
// state formatted as an object for ease. radio button captures last choice as object property, so there is
// no need to clear properties.
const feedback = (state = {}, action) => {

    switch (action.type) {
        case 'FEELING':
            console.log('log payload in reducer feedback', action.payload);
            state.feeling = action.payload;
            return state;
        case 'UNDERSTANDING':
            state.understanding = action.payload;
            return state;
        case 'SUPPORT':
            state.support = action.payload;
            return state;
        case 'COMMENTS':
            state.comments = action.payload;
            return state;
        default:
            return state;
    }
}

// reducer that stores ALL feedback from database
const allFeedback = (state = [], action) => {

    switch(action.type) {
        case 'ALL_FEEDBACK':
            console.log('payload for allFeedback, array of objects', action.payload);
            state = action.payload;
            return state;
        default:
            return state;
    }
}

// creating store
const store = createStore(
    combineReducers({
        feedback,
        allFeedback
    }),
    applyMiddleware(logger)
)


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'));
registerServiceWorker();
