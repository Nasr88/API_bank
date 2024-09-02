// reducers/userReducer.js
import { FETCH_PROFILE_SUCCESS } from '../actions/uerActions'

const initialState = {
  profile: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROFILE_SUCCESS:
      return {
        ...state,
        profile: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
