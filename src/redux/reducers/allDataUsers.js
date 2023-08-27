import { GET_DATA_USER , ADD_NEW_USER} from '../actionTypes/ActionTypes'
export default (state = [], action) => {
    let newState;
    switch (action.type) {
        case 'GET_DATA_USER':
            newState = action.payload;
            break;
        case 'ADD_NEW_USER':
            newState = action.payload;
            break;
        default:
            newState = state;
            // console.log("done here");
            break;

    }
    return newState;

}