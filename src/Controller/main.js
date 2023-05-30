import { cartReducer } from "./reducer";
import { combineReducers} from 'redux';

const root = combineReducers({

    cartReducer: cartReducer
})

export default root;