import axios from "axios";
export const SET_USER_CREDENTIALS = "SET_USER_CREDENTIALS";
const BASE_URL = "http://localhost:8080/";

export const setUserCredentials = credentials => ({
  type: SET_USER_CREDENTIALS,
  payload: credentials
});

export const login = params => {
  let { email, password } = params;
  return async dispatch => {
    try {
      const credentials = await axios.post(BASE_URL + "auth/login", {
        email: email,
        password: password
      });
      //TO-DO
      //MIGHT BREAK BELOW
      dispatch(setUserCredentials(credentials.data));
      //MIGHT BREAK ABOVE
    } catch (e) {
      throw new Error(e);
    }
  };
};

export default function reducer(
  state = {
    isLoggedIn: false,
    sessionToken: null,
    userId: null
  },
  action
) {
  // eslint-disable-next-line default-case
  let { type, payload } = action;
  switch (type) {
    case SET_USER_CREDENTIALS:
      return {
        isLogged: true,
        sessionToken: payload.token,
        userId: payload.userId,
      };
    default:
      return state;
  }
}