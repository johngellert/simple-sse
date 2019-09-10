import { combineReducers } from 'redux';
import colors from './colorsReducer';

const rootReducer = combineReducers({
    colors, 
});

export default rootReducer;