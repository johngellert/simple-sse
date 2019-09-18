import { combineReducers } from 'redux';
import currentColor from './colorsReducer';

const rootReducer = combineReducers({
    currentColor, 
});

export default rootReducer;