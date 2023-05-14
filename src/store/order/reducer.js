const initialState = {
    orders: []
}

export default function orderReducer (state = initialState, action) {
    switch(action.type){
        case "add_order":
            localStorage.setItem("orderReducer", JSON.stringify([...state.orders, action.payload]));
            return {
                ...state,
                orders: [...state.orders, action.payload]
            }
        case "add_total" : 
            const newOrders = [...state.orders]
            newOrders[action.id].total = Number(action.payload)*Number(newOrders[action.id].price)
            localStorage.setItem("orderReducer", JSON.stringify(newOrders));
            return {
                ...state,
                orders : newOrders
            }
        case "del_item" :
            localStorage.setItem("orderReducer", JSON.stringify(state.orders.filter(item => item.id !== action.payload)));

            return {
                ...state,
                orders : state.orders.filter(item => item.id !== action.payload)
            }
        case "SET_ORDERS":
            return {
                ...state,
                orders : [action.payload.orders]
            }
        default: 
            return state
    }
}