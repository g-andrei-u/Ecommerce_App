export const ADD_CART = 'ADD_CART';
export const REMOVE = 'REMOVE';
export const REMOVE_ITEM = 'REMOVE_ITEM';


export const ADD = (item) => {
    return {
        type: ADD_CART,
        payload: item
    }
};


const initialState = {
    carts: []
};

export const cartReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_CART:
            return {
                ...state,
                carts: [...state.carts, action.payload]
            }
            
    
        default:
            return state
    }
};