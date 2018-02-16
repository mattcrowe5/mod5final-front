import { headers } from "../authorization/headers";

let deployedURL = "https://gentle-garden-21695.herokuapp.com";
let local = "http://localhost:3000";

export function loginUser(code, history) {
  return dispatch => {
    return fetch(`${local}/api/v1/home`, {
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
    return fetch(`${local}/api/v1/fetch_user`, {
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

export function fetchTracks() {
  return dispatch => {
    return fetch(`${local}/api/v1/top_tracks`, {
      headers: headers(),
      method: "POST"
    })
      .then(res => res.json())
      .then(data => {
        dispatch({ type: "FETCH_TRACKS", payload: data.top_tracks.items });
      });
  };
}

export function fetchArtists() {
  return dispatch => {
    return fetch(`${local}/api/v1/top_artists`, {
      headers: headers(),
      method: "POST"
    })
      .then(res => res.json())
      .then(data => {
        dispatch({
          type: "FETCH_ARTISTS",
          payload: data.top_artists.items
        });
      });
  };
}

export const fetchRelatedArtists = state => {
  return dispatch => {
    return fetch(`${local}/api/v1/related_artists`, {
      headers: headers(),
      method: "POST",
      body: JSON.stringify(state)
    })
      .then(res => res.json())
      .then(data => {
        fetchShows(data, dispatch).then(data => {
          dispatch({ type: "FETCH_SHOWS", payload: data.shows });
        });
      });
  };
};

function fetchShows(relatedArtists, dispatch) {
  console.log("in  nested function");
  dispatch({
    type: "FETCH_RELATED_ARTISTS",
    payload: relatedArtists.related_artists
  });
  return fetch(`${local}/api/v1/shows`, {
    headers: headers(),
    method: "POST",
    body: JSON.stringify(relatedArtists)
  }).then(res => res.json());
}

export const loadAction = () => {
  return dispatch => {
    dispatch({ type: "LOADING", payload: true });
  };
};

export const clearShows = () => {
  return dispatch => {
    dispatch({ type: "CLEAR_SHOWS", payload: [] });
  };
};

export function saveShow(show, token) {
  return dispatch => {
    fetch(`${local}/api/v1/save_show`, {
      headers: headers(),
      method: "POST",
      body: JSON.stringify({ show, token })
    })
      .then(res => res.json())
      .then(data => dispatch({ type: "SAVE_SHOW", payload: data }));
  };
}

export function removeShow(show, token) {
  return dispatch => {
    fetch(`${local}/api/v1/remove_show`, {
      headers: headers(),
      method: "POST",
      body: JSON.stringify({ show, token })
    })
      .then(res => res.json())
      .then(data => dispatch({ type: "DELETE_SHOW", payload: data }));
  };
}

export function fetchSavedShows(token) {
  return dispatch => {
    fetch(`${local}/api/v1/index`, {
      headers: headers(),
      method: "POST",
      body: JSON.stringify({ token })
    })
      .then(res => res.json())
      .then(data => dispatch({ type: "FETCH_SAVED", payload: data }));
  };
}
