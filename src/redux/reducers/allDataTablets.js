import { GET_ALL_DATA_TABLETS } from '../actionTypes/ActionTypes'

export default (state = [], action) => {
    let newState;
    switch (action.type) {
        case GET_ALL_DATA_TABLETS:
            newState = action.payload;
            // console.log("newState tablets :", newState);
            break;
        default:
            newState = state;
            break;

    }
    return newState;
}