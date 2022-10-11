
import axiosClient from "../../config/AxiosClient";

import { LOGIN_START, LOGIN_START_SUCCESS, LOGIN_START_ERROR } from "../types";

export const loginIniciar = (userInfo) => async (dispatch) => {
    
    dispatch(loginStart());

    try {
        const {data} = await axiosClient.post('/login', userInfo);

        dispatch(loginStartSuccess(data));

    } catch (error) {

        dispatch(loginStartError(error.response.data));
    }

}

const loginStart = () => ({
    type: LOGIN_START
});

const loginStartSuccess = (data) => ({
    type: LOGIN_START_SUCCESS,
    payload: data
});

const loginStartError = (error) => ({
    type: LOGIN_START_ERROR,
    payload: error
});
