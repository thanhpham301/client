const initialState = {
    orders: []
}

export default function orderReducer (state = initialState, action) {
    switch(action.type){
        case "add_order":
            return {
                ...state,
                orders: [...state.orders, action.payload]
            }
        case "add_total" : 
            const newOrders = [...state.orders]
            newOrders[action.id].total = Number(action.payload)*Number(newOrders[action.id].price)
            return {
                ...state,
                orders : newOrders
            }
        default: 
            return state
    }
}