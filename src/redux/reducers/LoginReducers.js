
import { LOGIN_START, LOGIN_START_SUCCESS, LOGIN_START_ERROR } from "../types";

const initialState = {

    nombre_usuario: '',
    loading: false,
    message: '',
    code : '',
    error : '',
    rol: ''

}

export default function loginReducers (state = initialState, action) {
    switch (action.type) {
        case LOGIN_START:
            return {
                ...state,
                loading: true
            }
        case LOGIN_START_SUCCESS:
            return {
                ...state,
                loading: false,
                nombre_usuario: action.payload.nombreUsuario,
                message:  action.payload.msg,
                rol :  action.payload.idRol,
                code : '1',

            }
        case LOGIN_START_ERROR:
            return {
                ...state,
                nombre_usuario: '',
                loading: false,
                message: action.payload.message,
                code : action.payload.code
            }
      
        default:
            return state;
    }
}