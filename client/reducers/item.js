import { add_item, remove_item } from '../constants/actionTypes'

const initialState = [
  {
    name: 'Bacon',
    id: 0
  }
]

export default function item(state = initialState, action) {
  switch (action.type) {
    case add_item:
      return [
        {
          name: action.name,
          id: state.reduce((max_id, item) => Math.max(item.id, max_id), -1) + 1
        }, ...state
      ]
    case remove_item:
      return state.filter(item => item.id !== action.id)
    default:
      return state
  }
}
