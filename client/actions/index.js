import * as types from '../constants/actionTypes';

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

export function completeItem(id) {
  return {
    type: types.complete_item,
    id
  }
}
