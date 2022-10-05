
import axiosClient from "../../config/AxiosClient";

import { LOGIN_START, LOGIN_START_SUCCESS, LOGIN_START_ERROR } from "../types";

export const loginIniciar = (userInfo) => async (dispatch) => {
    console.log(userInfo)
    dispatch(loginStart());


    try {
        const login = await axiosClient.post('/login', userInfo);

        const data = login.data.respuesta[0].nombre_usuario
    
        dispatch(loginStartSuccess(data));

    } catch (error) {
        console.log(error)
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
