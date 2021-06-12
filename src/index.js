import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';

import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

const feedback = (state = [], action) => {

    switch(action.type){
        case 'FEELING':
            console.log('log payload in reducer feedback', action.payload);
            return [...state, action.payload];
        default:
            return state;
    }
    // return [...state, action.payload];
}


const store = createStore(
    combineReducers({
        feedback
    }),
    applyMiddleware(logger)
)


ReactDOM.render(
    <Provider store={store}>
<App />
</Provider>,
 document.getElementById('root'));
registerServiceWorker();
