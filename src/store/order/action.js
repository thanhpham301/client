export const addOrder = (item) => {
    return {
        type: "add_order",
        payload: item
    }
}

export const addTotal = (idx, value) => {
    return {
        type: "add_total",
        id: Number(idx),
        payload: Number(value)
    }
}

export const delItem = (item) => {
    return {
        type: "del_item",
        payload: item
    }
}
export const setOrders = (item) => {
    return {
        type: "SET_ORDERS",
        payload: item
    }
}