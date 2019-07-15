import {combineReducers} from 'redux';
import displayCarsReducer from './displayCarsReducer';

export default combineReducers({
  display: displayCarsReducer
});