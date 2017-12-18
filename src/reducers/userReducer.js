import { combineReducers } from "redux";

function userReducer(state = {}, action) {
  switch (action.type) {
    case "LOGIN_USER":
      return action.payload;
    case "LOGOUT_USER":
      localStorage.clear();
      return {};
    case "FETCH_USER":
      return action.payload;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  currentUser: userReducer
});

export default rootReducer;
