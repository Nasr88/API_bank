// src/redux/actions/authActions.js

import { loginUserApi} from '../../api/api.js';

export const LOGIN_USER = 'LOGIN_USER';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';

export const loginUserAction = (credentials, navigate) => {
    return async (dispatch) => {
        dispatch({ type: LOGIN_USER });
        try {
            // Here, you can make your API call to login the user
            
            // Appeler la fonction API pour se connecter
            const data = await loginUserApi(credentials);
            // Vérifiez la structure de la réponse
            console.log('Response data:', data);
            // Correct: Access the token from the nested body object
            const token = data.body.token;
            console.log("token",token); 
            

             // Stocker le token dans le localStorage
             localStorage.setItem('token', token);

            // Dispatch success action
            dispatch({ type: LOGIN_USER_SUCCESS, payload: data });
            // Navigate to the profile page
            navigate('/profile');
            
        } catch (error) {
            // Dispatch failure action
            dispatch({ type: LOGIN_USER_FAILURE, payload: error.message });
        }
    };
};


