const defaultState = [];

function reducer(state = defaultState, { type, payload }) {
  switch (type) {
    case "getRepositoriesAsync": {
      return payload;
    }

    default:
      return state;
  }
}

export default reducer;
