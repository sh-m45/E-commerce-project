import { GET_ALL_DATA_PHONES } from '../actionTypes/ActionTypes'

export default (state = [], action) => {
    let newState;
    switch (action.type) {
        case GET_ALL_DATA_PHONES:
            newState = action.payload;
            // console.log("newState phones :", newState);
            break;
        default:
            newState = state;
            break;

    }
    return newState;
}