import * as types from '../constants/actionTypes'

const initialState = [
  {
    name: 'Bacon',
    bought: false,
    id: 0
  }
]

export default function item(state = initialState, action) {
  switch (action.type) {
    case types.add_item:
      return [
        {
          name: action.name,
          id: state.reduce((max_id, item) => Math.max(item.id, max_id), -1) + 1,
          bought: false,
        }, ...state
      ]

    case types.remove_item:
      return state.filter(item => item.id !== action.id)

    case types.complete_item:
      return state.map(item =>
        item.id === action.id
        ? Object.assign({}, item, { bought: !item.bought })
        : item
      )

    default:
      return state
  }
}
