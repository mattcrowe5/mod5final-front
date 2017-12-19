import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { tracksReducer } from "./tracksReducer";

const rootReducer = combineReducers({
  currentUser: userReducer,
  topTracks: tracksReducer
});

export default rootReducer;
