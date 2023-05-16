import { createStore, combineReducers } from "redux";
import orderReducer from "./order/reducer";
import userReducer from "./user/reducer";

const reducer = combineReducers({
  orderReducer,
  userReducer,
});

export const store = createStore(reducer);
