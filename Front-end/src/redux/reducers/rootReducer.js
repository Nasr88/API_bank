// src/redux/reducers/rootReducer.js

import { combineReducers } from 'redux';
import authReducer from './authReducer';

const rootReducer = combineReducers({
    auth: authReducer, 
    // add more reducers here if needed
});

export default rootReducer;
