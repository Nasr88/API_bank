// actions/userActions.js
export const FETCH_PROFILE_SUCCESS = "FETCH_PROFILE_SUCCESS";
export const UPDATE_PROFILE_SUCCESS = 'UPDATE_PROFILE_SUCCESS';
export const UPDATE_PROFILE_FAILURE = 'UPDATE_PROFILE_FAILURE';

export const fetchProfileSuccess = (profile) => {
  return {
    type: FETCH_PROFILE_SUCCESS,
    payload: profile,
  };
};

export const fetchProfile = () => async (dispatch, getState) => {
  const { token } = getState().auth; // Access token from auth state

  try {
    if (token) {
      const response = await fetch(
        "http://localhost:3001/api/v1/user/profile",
        {
          method: "Post",
          headers: {
            Authorization: `Bearer ${token}`, // Pass token in Authorization header
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();

      if (response.ok) {
        dispatch(fetchProfileSuccess(data));
      } else {
        // handle error
      }
    }
  } catch (error) {
    // handle error
  }
};
//Créer une Action de Déconnexion
export const LOGOUT = 'LOGOUT';

export const logout = () => {
  return {
    type: LOGOUT,
  };
};

// Action pour mettre à jour le profil utilisateur
export const updateProfile = (firstName, lastName) => async (dispatch, getState) => {
  const { token } = getState().auth; // Récupérer le token depuis l'état global

  try {
    if (token){
      const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'PUT',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstName, lastName }),
    });

    if (!response.ok) {
        throw new Error('Failed to update profile');
    }

    const data = await response.json();
    dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: data.body });
    }
     
  } catch (error) {
      dispatch({ type: UPDATE_PROFILE_FAILURE, error: error.message });
  }
};