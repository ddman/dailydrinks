import { combineReducers } from 'redux-immutable';
import orders from './orders'
const rootReducer = combineReducers({
  orders
})

export default rootReducer;