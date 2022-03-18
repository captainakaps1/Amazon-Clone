export const initialState = {
    basket: []
}

export const getTotalItemsCost = (basket) => basket.reduce((amount, item) => item.price + amount, 0)

export const reducer = (state, action) => {
    console.log(action)
    switch(action.type){
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
        default:
            return state
    }
}