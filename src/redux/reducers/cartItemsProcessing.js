import {GET_CART_ITEMS_INCREMENT} from '../actionTypes/ActionTypes'

export default (state =[], action) => {
    let newState;
    switch (action.type) {
        case GET_CART_ITEMS_INCREMENT:
            // newState = [...state, action.payload];   // fi case update / add item in array ->  newState = [...state, action.payload]
            newState = action.payload ;
            // console.log("newState cart items : ", newState)
            break;
        default:
            newState = state;
            // console.log("done");
            break;
    }
    return newState;
}

