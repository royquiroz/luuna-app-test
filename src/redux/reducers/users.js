const defaultState = [];

function reducer(state = defaultState, { type, payload }) {
  switch (type) {
    case "getUsersAsync": {
      return payload;
    }

    default:
      return state;
  }
}

export default reducer;
