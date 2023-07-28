import { GET_ALL_DATA_PRODUCTS } from '../actionTypes/ActionTypes'

export default (state = [], action) => {
    let newState;
    switch (action.type) {
        case GET_ALL_DATA_PRODUCTS:
            newState = action.payload;
            console.log("newState:: ", newState);
            break;
        default:
            newState = state;
            break;
    }
    return newState ;
}