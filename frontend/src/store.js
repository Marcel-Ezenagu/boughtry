import { createStore,compose, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { cartReducer } from './reducers/cartReducers';
import { productCreateReducer, productDetailsReducer, productListReducer } from './reducers/productReducers';
import { userListReducer, userRegisterReducer, userSigninReducer } from './reducers/userReducers';


const initialState = {
    cart: {
        cartItems: localStorage.getItem('cartIems')
            ? JSON.parse(localStorage.getItem('cartIems'))
            : [],
    },

    userSignin: {
        userInfo: localStorage.getItem('userInfo')
            ? JSON.parse(localStorage.getItem('userInfo'))
            : null,
    }

};

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer, 
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
    productCreate: productCreateReducer,
    userList: userListReducer,
}); 


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
);

export default store;