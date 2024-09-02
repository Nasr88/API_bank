// actions/userActions.js
export const FETCH_PROFILE_SUCCESS = "FETCH_PROFILE_SUCCESS";

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
