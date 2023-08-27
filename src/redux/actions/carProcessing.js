import axios from "axios";
import {
    GET_CART_ITEMS_INCREMENT,
    GET_ALL_DATA_PRODUCTS,
    GET_ALL_PRODUCTS_DATA_CARTS,
    GET_CERTAIN_DATA_ITEM,
    GET_ALL_DATA_PHONES,
    GET_ALL_DATA_TABLETS,
    GET_ALL_PRODUCTS_CART,
    DELETE_ITEM_FROM_PRODUCTS_CART,
    GET_ALL_PRODUCTS_CART_LAPTOPS,
    GET_ALL_PRODUCTS_CART_TABLETS,
    GET_DATA_USER,
    ADD_NEW_USER
} from "../actionTypes/ActionTypes";

export const incrementItem = (carItems, product, name) => async dispatch => { //carItems
    console.log("carItems in action is :", carItems)
    if (name == "phones") {
        await axios.post('http://localhost:3032/cartItems', product).then((response) => {
            const product = response.data;
            // if(response.status === 200) {
            dispatch({ type: GET_CART_ITEMS_INCREMENT, payload: carItems })
            // }
            return product;
        }).catch((error) => console.log(error));
    }
    else if (name == "laptops") {
        await axios.post('http://localhost:3032/cartItemsLaptops', product).then((response) => {
            const product = response.data;
            // if(response.status === 200) {
            dispatch({ type: GET_CART_ITEMS_INCREMENT, payload: carItems })
            // }
            return product;
        }).catch((error) => console.log(error));
    }
    else if (name == "tablets") {
        await axios.post('http://localhost:3032/cartItemsTablets', product).then((response) => {
            const product = response.data;
            console.log("name is action :", name)
            // if(response.status === 200) {
            dispatch({ type: GET_CART_ITEMS_INCREMENT, payload: carItems })
            // }
            return product;
        }).catch((error) => console.log(error));
    }

}

export const getProductsCart = () => async dispatch => {
    await axios.get('http://localhost:3032/cartItems').then((respone) => {
        const allProducts = respone.data;
        if (respone.status === 200) dispatch({ type: GET_ALL_PRODUCTS_CART, payload: allProducts });
        return;
    }).catch((error) => { console.log("error => ", error) });
}

export const getProductsCartLaptops = () => async dispatch => {
    await axios.get('http://localhost:3032/cartItemsLaptops').then((respone) => {
        const allProductsLaptops = respone.data;
        if (respone.status === 200) dispatch({ type: GET_ALL_PRODUCTS_CART_LAPTOPS, payload: allProductsLaptops });
        return allProductsLaptops;

    }).catch((error) => { console.log("error in laptops => ", error) });
}

export const getProductsCartTablets = () => async dispatch => {
    await axios.get('http://localhost:3032/cartItemsTablets').then((respone) => {
        const allProductsTablets = respone.data;
        if (respone.status === 200) dispatch({ type: GET_ALL_PRODUCTS_CART_TABLETS, payload: allProductsTablets });
        return allProductsTablets;

    }).catch((error) => { console.log("error in tablets => ", error) });
}

export const getAllProductsData = () => async dispatch => {
    await axios.get('http://localhost:3032/laptops').then((response) => {
        const laptops = response.data;
        dispatch({ type: GET_ALL_DATA_PRODUCTS, payload: laptops })
        return laptops;
    }).catch((error) => console.log(error));
}

export const getDataPhones = () => async dispatch => {
    await axios.get('http://localhost:3032/phones').then((response) => {
        const phones = response.data;
        // console.log("phones in action :", phones);
        dispatch({ type: GET_ALL_DATA_PHONES, payload: phones });
        return phones;
    }).catch((error) => console.log(error))
}

export const getDataTablets = () => async dispatch => {
    await axios.get('http://localhost:3032/tablets').then((response) => {
        const tablets = response.data;
        // console.log("phones in action :", tablets);
        dispatch({ type: GET_ALL_DATA_TABLETS, payload: tablets });
        return tablets;
    }).catch((error) => console.log(error))
}

export const getCertainItem = (id, name) => async dispatch => {
    if (name == "laptops") {
        await axios.get(`http://localhost:3032/laptops/${id}`).then((response) => {
            const item = response.data;
            dispatch({ type: GET_CERTAIN_DATA_ITEM, payload: item })
            return item;
        }).catch(error => console.log(error));
    }
    else if(name == "tablets") {
        await axios.get(`http://localhost:3032/tablets/${id}`).then((response) => {
            const item = response.data;
            dispatch({ type: GET_CERTAIN_DATA_ITEM, payload: item })
            return item;
        }).catch(error => console.log(error));
    }
    else if(name == "phones") {
        await axios.get(`http://localhost:3032/phones/${id}`).then((response) => {
            const item = response.data;
            dispatch({ type: GET_CERTAIN_DATA_ITEM, payload: item })
            return item;
        }).catch(error => console.log(error));
    }

}
export const deleteCertainCartItem = (id, name) => async dispatch => {
    if (name == "phones") {
        await axios.delete(`http://localhost:3032/cartItems/${id}`).then((response) => {
            const updateDataPhone = response.data;
            // console.log("updateDataPhone in action :", updateDataPhone);
            dispatch({ type: DELETE_ITEM_FROM_PRODUCTS_CART, payload: updateDataPhone });
            return updateDataPhone;
        })
    }
    else if (name == "laptops") {
        await axios.delete(`http://localhost:3032/cartItemsLaptops/${id}`).then((response) => {
            const updateDataPhone = response.data;
            // console.log("updateDataPhone in action :", updateDataPhone);
            dispatch({ type: DELETE_ITEM_FROM_PRODUCTS_CART, payload: updateDataPhone });
            return updateDataPhone;
        })
    }
    else if (name == "tablets") {
        await axios.delete(`http://localhost:3032/cartItemsTablets/${id}`).then((response) => {
            const updateDataPhone = response.data;
            // console.log("updateDataPhone in action :", updateDataPhone);
            dispatch({ type: DELETE_ITEM_FROM_PRODUCTS_CART, payload: updateDataPhone });
            return updateDataPhone;
        })
    }
}

export const getUser = () => async dispatch => {
    await axios.get('http://localhost:3032/users').then((response) => {
        const user = response.data;
        dispatch({ type:GET_DATA_USER , payload: user});
        return user ;
    }).catch((error) => console.log("error at user => ", error))
}

export const addNewUser = (user) => async dispatch => {
    console.log("user in action :", user)
    await axios.post('http://localhost:3032/users', user ).then((response) => {
        let data = response.data
        if( response.status == 200) dispatch({ type:ADD_NEW_USER , payload: data});
        return ;
    }).catch((error) => console.log("error in add user => ", error));
}