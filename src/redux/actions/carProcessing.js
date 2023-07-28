import axios from "axios";
import { GET_CART_ITEMS_INCREMENT } from '../actionTypes/ActionTypes'
import { GET_ALL_DATA_PRODUCTS } from '../actionTypes/ActionTypes'
import { GET_CERTAIN_DATA_ITEM } from "../actionTypes/ActionTypes";

export const incrementItem = (carItems) => { //carItems
    return {
        type: GET_CART_ITEMS_INCREMENT,
        payload: carItems
    }

}



export const getAllProductsData =  () => async dispatch => {
    await axios.get('http://localhost:3032/laptops').then((response) => {
        const laptops = response.data;
        // const newLaptops = [];
        // for (const key in laptops){
        //     newLaptops.push({id: key , ...laptops[key]})
        // }
        console.log("laptops: ", laptops);
        dispatch({ type: GET_ALL_DATA_PRODUCTS, payload: laptops })
        return laptops ;
    }).catch((error) => console.log(error));
}

export const getCertainItem = (id) => async dispatch => {
    console.log("id in action:", id)
    await axios.get(`http://localhost:3032/laptops/${id}`).then((response) => {
        const item = response.data ;
        console.log("certain item : ", item);
        dispatch({ type: GET_CERTAIN_DATA_ITEM, payload: item })
        return item ;
    }).catch(error => console.log(error));
}