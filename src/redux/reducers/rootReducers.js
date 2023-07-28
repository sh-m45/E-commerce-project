import { combineReducers } from "redux";
import cartItemsProcessing from "./cartItemsProcessing";
import allDataProducts from "./allDataProducts"; 
import certainDataItem from "./certainDataItem";
export default combineReducers({
    cartItemsNav: cartItemsProcessing,
    getAllProducts: allDataProducts, 
    getCertainData : certainDataItem ,

});