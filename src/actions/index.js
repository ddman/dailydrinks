export const ADD_ORDER = 'ADD_ORDER'
export const UPDATE_ORDER = 'UPDATE_ORDER'
export const DELETE_ORDER = 'DELETE_ORDER'

export const addOrder = (order) => {
  return {
    type: ADD_ORDER,
    order
  }
}

export const updateOrder = (order, key) => {
  return {
    type: UPDATE_ORDER,
    order,
    key
  }
}


export const deleteOrder = (key) => {
  return {
    type: DELETE_ORDER,
    key
  }
}