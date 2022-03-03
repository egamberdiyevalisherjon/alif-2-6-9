function user(state, action) {
  switch (action.type) {
    case "USER_LOGIN": {
      return { ...state, login: true, token: action.payload.token };
    }
    default: {
      return state;
    }
  }
}
