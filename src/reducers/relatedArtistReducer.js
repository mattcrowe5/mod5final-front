export function relatedArtistReducer(state = [], action) {
  switch (action.type) {
    case "FETCH_RELATED_ARTISTS":
      return action.payload;
    default:
      return state;
  }
}
