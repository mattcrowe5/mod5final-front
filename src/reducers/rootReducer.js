import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { tracksReducer } from "./tracksReducer";
import { artistReducer } from "./artistReducer";
import { relatedArtistReducer } from "./relatedArtistReducer";
import { showReducer } from "./showReducer";
import { loadReducer } from "./loadReducer";
import { savedShowReducer } from "./savedShowReducer";

const rootReducer = combineReducers({
  currentUser: userReducer,
  topTracks: tracksReducer,
  topArtists: artistReducer,
  relatedArtists: relatedArtistReducer,
  shows: showReducer,
  loading: loadReducer,
  savedShows: savedShowReducer
});

export default rootReducer;
