import { Map, fromJS } from 'immutable'
import {
  ADD_ORDER,
  UPDATE_ORDER,
  DELETE_ORDER
} from '../actions/index'

const initialState = Map()

const orders = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ORDER:
      const dateTime = Date.now();
      const timestamp = Math.floor(dateTime / 1000) + '';
      state = state.set(timestamp, action.order)
      break
    case UPDATE_ORDER:
      state = state.set(action.key, action.order)
      break
    case DELETE_ORDER:
      state = state.delete(action.key)
      break
    default:
      break
  }
  return state
}

export default orders