// src/redux/actions/authActions.js

export const LOGIN_USER = 'LOGIN_USER';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';

export const loginUser = (credentials) => {
    return async (dispatch) => {
        dispatch({ type: LOGIN_USER });
        try {
            // Here, you can make your API call to login the user
            const response = await fetch('http://localhost:3001/api/v1/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials),
            });

            if (!response.ok) {
                throw new Error('Login failed');
            }

            const data = await response.json();

            // Dispatch success action
            dispatch({ type: LOGIN_USER_SUCCESS, payload: data });
        } catch (error) {
            // Dispatch failure action
            dispatch({ type: LOGIN_USER_FAILURE, payload: error.message });
        }
    };
};
