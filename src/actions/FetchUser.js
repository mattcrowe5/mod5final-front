import { headers } from "../authorization/headers";

export function loginUser(code, history) {
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/home", {
      method: "POST",
      headers: headers(),
      body: JSON.stringify({ code })
    })
      .then(res => res.json())
      .then(user => {
        localStorage.setItem("jwt", user.code);
        dispatch({ type: "LOGIN_USER", payload: user.currentUser });
        history.push("/home");
      });
  };
}

export function fetchUser(jwt, history) {
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/fetch_user", {
      method: "POST",
      headers: headers(),
      body: JSON.stringify({ jwt })
    })
      .then(res => res.json())
      .then(user => {
        dispatch({ type: "FETCH_USER", payload: user.currentUser });
      });
  };
}

export function logoutUser() {
  return dispatch => {
    localStorage.clear();
    return {};
  };
}
