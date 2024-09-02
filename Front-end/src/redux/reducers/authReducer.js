// src/redux/reducers/authReducer.js

import { LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE, LOGOUT } from '../actions/authActions';

const initialState = {
    loading: false,// Définit si une action d'authentification est en cours
    user: null, // Contient les informations de l'utilisateur connecté
    error: null,// Stocke les messages d'erreur éventuels
    token: null     // Stocke le jeton JWT pour authentification
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
                loading: false, // L'opération de connexion est terminée
                user: action.payload.body.user, // Informations utilisateur récupérées
                token: action.payload.body.token // Jeton d'authentification reçu
          
            };
        case LOGIN_USER_FAILURE:
            return {
                ...state,
                loading: false,
                user: null,
                error: action.payload,// action.payload contient le message d'erreur
            };
        case LOGOUT:
            return {
                ...state,
                token: null, // Réinitialise le token à null lors de la déconnexion
            };
        default:
            return state;
    }
};

export default authReducer;
