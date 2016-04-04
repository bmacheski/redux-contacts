import expect from 'expect'
import * as types from '../../client/constants/ActionTypes'
import * as actions from '../../client/actions'

describe('item actions', () => {

  it('createItem should create new item', () => {
    expect(actions.addItem('Cheese')).toEqual({
      type: types.add_item,
      name: 'Cheese'
    })
  })

  it('removeItem should create removeItem action', () => {
    expect(actions.removeItem(0)).toEqual({
      type: types.remove_item,
      id: 0
    })
  })
})
