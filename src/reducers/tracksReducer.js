export function tracksReducer(state = [], action) {
  switch (action.type) {
    case "FETCH_TRACKS":
      debugger;
      return action.payload;
    default:
      return state;
  }
}
