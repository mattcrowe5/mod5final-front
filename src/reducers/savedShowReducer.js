export function savedShowReducer(state = [], action) {
  switch (action.type) {
    case "SAVE_SHOW":
      return action.payload;
    case "DELETE_SHOW":
      return action.payload;
    case "FETCH_SAVED":
      return action.payload;
    default:
      return state;
  }
}
