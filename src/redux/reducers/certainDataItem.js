import { GET_CERTAIN_DATA_ITEM } from '../actionTypes/ActionTypes'

export default (state = [], action) => {
    let newState;
    switch (action.type) {
        case GET_CERTAIN_DATA_ITEM:
            newState = action.payload;
            console.log("newState at certain data:: ", newState);
            break;
        default:
            newState = state;
            break;
    }
    return newState ;
}