// reducers/userReducer.js
import { 
    FETCH_PROFILE_SUCCESS,
    UPDATE_PROFILE_SUCCESS,
    UPDATE_PROFILE_FAILURE,
     LOGOUT
 } from '../actions/userActions'

const initialState = {
  profile: null,
  loading: false,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROFILE_SUCCESS:
      return {
        ...state,
        profile: action.payload,
        loading: false,
        error: null,
      };
    case LOGOUT:
        return {
          ...state,
          profile: null, // Réinitialiser le profil lors de la déconnexion
          loading: false,
          error: null,
        };
    case UPDATE_PROFILE_SUCCESS:
        return {
            ...state,
            profile: { ...state.profile, ...action.payload }, // Mettre à jour le profil avec les nouvelles données
            error: null,
        };
    case UPDATE_PROFILE_FAILURE:
        return {
            ...state,
            error: action.error,
        };    
    default:
        return state;
  }
};

export default userReducer;
