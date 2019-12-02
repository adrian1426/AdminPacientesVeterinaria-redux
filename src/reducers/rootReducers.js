import {combineReducers} from 'redux';
import citas from './citasReducer';

export default combineReducers({
    citas:citas//esto se disminuye solo poniendo una sola vez el mismo nombre
});
