import { createStore, combineReducers } from "redux";
import orderReducer from "./order/reducer";
import userReducer from "./user/reducer";
import showLogOutReducer from "./header/reducer";

const reducer = combineReducers({
  orderReducer,
  userReducer,
  showLogOutReducer,
});

export const store = createStore(reducer);
