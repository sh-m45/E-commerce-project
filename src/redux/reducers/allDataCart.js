import { GET_ALL_PRODUCTS_CART } from '../actionTypes/ActionTypes'

export default (state = [], action) => {
    let newState;
    switch (action.type) {
        case GET_ALL_PRODUCTS_CART:
            newState = action.payload;
            // console.log("newState all items cart Phones : ", newState)
            break;
        default:
            newState = state;
            // console.log("done here");
            break;
    }
    return newState;
}
