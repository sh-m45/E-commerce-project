import { DELETE_ITEM_FROM_PRODUCTS_CART } from '../actionTypes/ActionTypes'

export default (state = [], action) => {
    let newState;
    switch (action.type) {
        case DELETE_ITEM_FROM_PRODUCTS_CART:
            newState = action.payload ;
            // console.log("newState after delete cart item : ", newState)
            break;
        default:
            newState = state;
            // console.log("done here");
            break;
    }
    return newState;
}
