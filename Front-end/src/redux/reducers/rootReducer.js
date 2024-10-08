// src/redux/reducers/rootReducer.js

import { combineReducers } from 'redux';
import authReducer from './authReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    auth: authReducer, 
    user: userReducer,
});

export default rootReducer;
