import { combineReducers } from 'redux';
import { loginReducer } from './loginReducer';
import { itemReducer } from './itemReducer';

export default combineReducers({
    loginReducer, itemReducer
})