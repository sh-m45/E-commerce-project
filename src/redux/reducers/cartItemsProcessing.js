import {GET_CART_ITEMS_INCREMENT} from '../actionTypes/ActionTypes'

export default (state = 0, action) => {
    let newState;
    switch (action.type) {
        case GET_CART_ITEMS_INCREMENT:
            newState = action.payload;   // fi case update / add item in array ->  newState = [...state, action.payload]
            console.log("newState", newState)
            break;
        default:
            newState = state;
            break;
    }
    return newState;
}

