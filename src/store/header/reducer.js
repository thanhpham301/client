const initialState = {
  user: null,
};

export default function showLogOutReducer(state = initialState, action) {
  switch (action.type) {
    case "showLogOut":
      return {
        ...state,
        logOut: action.payload,
      };
    default:
      return state;
  }
}
