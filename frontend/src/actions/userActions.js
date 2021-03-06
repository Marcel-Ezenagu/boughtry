import axios from "axios";
import {
    USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS,
    USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNOUT,
    USER_LIST_REQUEST, USER_LIST_SUCCESS
} from "../constants/userConstants"
import instance from "../services/axios";

export const listUsers = () => async (dispatch) => {
    dispatch({
        type: USER_LIST_REQUEST
    });
    try {
        const { data } = await instance.get('/api/users');
        dispatch({
            type: USER_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({type: USER_LIST_FAIL,
            payload:error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        })
    }
}

export const register = (name, email, password) => async (dispatch) => {
    dispatch({
        type: USER_REGISTER_REQUEST, payload: { name, email, password }
    });
    try {
        const { data } = await instance.post('/api/users/register', {name, email, password });
        dispatch({
            type: USER_REGISTER_SUCCESS, payload: data
        });
        dispatch({
            type: USER_SIGNIN_SUCCESS, payload: data
        });
        localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }
};

export const signin = (email, password) => async (dispatch) => {
    dispatch({
        type: USER_SIGNIN_REQUEST, payload: { email, password }
    });
    try {
        const { data } = await instance.post('/api/users/signin', { email, password });
        dispatch({
            type: USER_SIGNIN_SUCCESS, payload: data
        });
        localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({
            type: USER_SIGNIN_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }
};


export const signout = () => (dispatch) => {
    localStorage.removeItem('userInfo')
    dispatch({ type: USER_SIGNOUT });
};
