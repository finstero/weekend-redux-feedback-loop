import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';

import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

const feedback = (state = [], action) => {
    if (action.type === 'FEELING') {
        console.log('log payload', action.payload);
        return action.payload
    }
    return state;
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
