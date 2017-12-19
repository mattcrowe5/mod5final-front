import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { tracksReducer } from "./tracksReducer";
import { artistReducer } from "./artistReducer";

const rootReducer = combineReducers({
  currentUser: userReducer,
  topTracks: tracksReducer,
  topArtists: artistReducer
});

export default rootReducer;
