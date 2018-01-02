import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { tracksReducer } from "./tracksReducer";
import { artistReducer } from "./artistReducer";
import { relatedArtistReducer } from "./relatedArtistReducer";
import { showReducer } from "./showReducer";
import { loadReducer } from "./loadReducer";

const rootReducer = combineReducers({
  currentUser: userReducer,
  topTracks: tracksReducer,
  topArtists: artistReducer,
  relatedArtists: relatedArtistReducer,
  shows: showReducer,
  loading: loadReducer
});

export default rootReducer;
