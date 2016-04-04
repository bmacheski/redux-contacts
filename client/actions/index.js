import * as types from '../constants/ActionTypes'

export function addItem(name) {
  return {
    type: types.add_item,
    name
  }
}

export function removeItem(id) {
  return {
    type: types.remove_item,
    id
  }
}
