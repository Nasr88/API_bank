// src/redux/reducers/authReducer.js

import { LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE } from '../actions/authActions';

const initialState = {
    loading: false,
    user: null,
    error: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,//ne jamais modifier directement l'état mais plutôt créer une nouvelle copie de l'état 
                loading: true,
                error: null,
            };
        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload,// action.payload contient les données de l'utilisateur
                error: null,
            };
        case LOGIN_USER_FAILURE:
            return {
                ...state,
                loading: false,
                user: null,
                error: action.payload,// action.payload contient le message d'erreur
            };
        default:
            return state;
    }
};

export default authReducer;
