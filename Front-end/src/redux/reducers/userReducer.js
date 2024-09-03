// reducers/userReducer.js
import { FETCH_PROFILE_SUCCESS, LOGOUT } from '../actions/uerActions'

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
    default:
      return state;
  }
};

export default userReducer;
