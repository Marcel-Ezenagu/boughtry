import { PRODUCT_CREATE_FAIL, PRODUCT_CREATE_REQUEST, PRODUCT_CREATE_SUCCESS, PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../constants/productConstants"
import instance from "../services/axios";

export const createProduct = (name, image, description, price, countInStock, category, brand) => async (dispatch) => {
    dispatch({ type: PRODUCT_CREATE_REQUEST });
    try {
        const { data } = await instance.post('/api/products', {name, image, description, price, countInStock, category, brand});
        dispatch({
            type: PRODUCT_CREATE_SUCCESS, payload: data
        });
        localStorage.setItem('productInfo', JSON.stringify(data))
    } catch (error) {
        dispatch({type:PRODUCT_CREATE_FAIL, payload: error.response && error.response.data.message
            ? error.response.data.message
            : error.message})
    }
}

export const listProducts = () => async (dispatch) => {
    dispatch({
        type: PRODUCT_LIST_REQUEST
    });
    try {
        const { data } = await instance.get('/api/products');
        dispatch({
            type: PRODUCT_LIST_SUCCESS, payload: data
        });
    } catch (error) {
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload: error.message
        });
    }
};

export const detailProduct = (productId) => async (dispatch) => {
    dispatch({
        type: PRODUCT_DETAILS_REQUEST, payload: productId
    });
    try {
        const { data } = await instance.get(`/api/products/${productId}`);
        dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        });
        
    }
};