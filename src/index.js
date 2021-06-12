import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// feedback reducer storing all feedback input in different routes as feedback properties
// state formatted as an object for ease
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

// creating store
const store = createStore(
    combineReducers({
        feedback
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
