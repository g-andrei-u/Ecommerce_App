export const ADD_CART = 'ADD_CART';
export const REMOVE = 'REMOVE';
export const REMOVE_ITEM = 'REMOVE_ITEM';


export const ADD = (item) => {
    return {
        type: ADD_CART,
        payload: item
    }
};

export const DELETE = (id) => {
    return {
        type: REMOVE,
        payload: id
    }
};

export const REMOVE_INT = (item) => {
    return {
        type: REMOVE_ITEM,
        payload: item
    }
};


const initialState = {
    carts: []
};

export const cartReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_CART:
            /*return {
                ...state,
                carts: [...state.carts, action.payload]
            }*/
            
            const itemIndex = state.carts.findIndex((item) => item.id === action.payload.id);
            if (itemIndex >= 0) {

                state.carts[itemIndex].qty += 1
                /*return {
                    ...state,
                    carts: [...state.carts]
                }*/
            } else {

                const temp = {...action.payload, qty : 1}
                return {
                    ...state,
                    carts: [...state.carts, temp]
                }
            }

        case REMOVE:
            const data = state.carts.filter((item) => item.id !== action.payload);
            return {
                ...state,
                carts: data
            }

        case REMOVE_ITEM:
            const itemIndex_desc = state.carts.findIndex((item) => item.id === action.payload.id);
            if(state.carts[itemIndex_desc].qty >= 1) {
                state.carts[itemIndex_desc].qty -= 1;
                return {
                    ...state,
                    carts: [...state.carts]
                }
            } else if (state.carts[itemIndex_desc].qty === 1) {
                const data = (state.carts.filter((el) => el.id !== action.payload.id));
                return {
                    ...state,
                    carts: data
                }
            } else {
                return state
            }
        default:
            return state
    }
};