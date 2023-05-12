import { createStore, combineReducers } from "redux";
import orderReducer from "./order/reducer";

const reducer = combineReducers({
    orderReducer
})

export const store = createStore(reducer)