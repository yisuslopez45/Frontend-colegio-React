
import { LOGIN_START, LOGIN_START_SUCCESS, LOGIN_START_ERROR, CERRAR_LOGIN_SUCCESS } from "../types";

const initialState = {

    nombre_usuario: '',
    loading: false,
    message: '',
    code: '',
    error: '',
    rol: '',
    token :''

}

export default function loginReducers(state = initialState, action) {
    switch (action.type) {
        case LOGIN_START:
            return {
                ...state,
                loading: true,
                code: ""
            }
        case LOGIN_START_SUCCESS:
            return {
                ...state,
                loading: true,
                nombre_usuario: action.payload.nombreUsuario,
                message: action.payload.msg,
                rol: action.payload.idRol,
                code: '1',
                id_usuario: action.payload.id_usuario,
                token : action.payload.tokenGenerado

            }
        case LOGIN_START_ERROR:
            return {
                ...state,
                nombre_usuario: '',
                loading: false,
                message: action.payload.message,
                code: action.payload.code
            }

        case CERRAR_LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                nombre_usuario: '',
                message: '',
                rol: '',
                code: '',
                id_usuario: ''

            }

        default:
            return state;
    }
}