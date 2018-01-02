export function showReducer(state = [], action) {
  switch (action.type) {
    case "FETCH_SHOWS":
      return action.payload;
    case "CLEAR_SHOWS":
      return action.payload;
    default:
      return state;
  }
}
