import { combineReducers } from "redux";
import cartItemsProcessing from "./cartItemsProcessing";
import allDataProducts from "./allDataProducts"; 
import certainDataItem from "./certainDataItem";
import allDataPhones from "./allDataPhones";
import allDataTablets from "./allDataTablets"
import allDataCart from './allDataCart'
import allDataCartLaptops from './allDataCartLaptops'
import allDataAfterDeleteCartItem from "./allDataAfterDeleteCartItem";
import allDataCartTablets from "./allDataCartTablets"
import allDataUsers from "./allDataUsers"
export default combineReducers({
    cartItemsNavs: cartItemsProcessing,
    getAllProducts: allDataProducts, 
    getCertainData : certainDataItem ,
    getAllDataPhones : allDataPhones ,
    getAllDataTablets: allDataTablets,
    getAllDataCart: allDataCart,
    deleteCertainCartItem: allDataAfterDeleteCartItem ,
    getAllDataCartLaptops: allDataCartLaptops,
    getAllDataCartTablets: allDataCartTablets,
    getAllDataUsers: allDataUsers ,

});