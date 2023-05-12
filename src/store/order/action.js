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