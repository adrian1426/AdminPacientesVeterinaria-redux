import {combineReducers} from 'redux';
import citas from './citasReducer';
import validacion from './validacionReducer';

export default combineReducers({
    citas:citas,//esto se disminuye solo poniendo una sola vez el mismo nombre
    error: validacion
});
