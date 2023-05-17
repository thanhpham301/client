const initialState = {
  user: null,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case "add_user":
      return {
        ...state,
        user: action.payload,
      };
    case "del_user":
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
}
