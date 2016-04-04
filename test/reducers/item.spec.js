import expect from 'expect'
import item from '../../client/reducers/item'
import { add_item, remove_item } from '../../client/constants/ActionTypes'

describe('reducers', () => {
  describe('item reducer', () => {
    it('should provide the initial state', () => {
      expect(item(undefined, {})).toEqual(
        [
          {
            name: 'Bacon',
            id: 0
          }
        ]
      )
    })

    it('should handle add item', () => {
      expect(
        item([],  {
          type: add_item,
          name: 'Eggs'
        })
      ).toEqual(
        [
          {
            name: 'Eggs',
            id: 0
          }
        ]
      )
    })

    it('should handle remove item', () => {
      expect(
        item([
          {
            name: 'Eggs',
            id: 0
          }, {
            name: 'Milk',
            id: 1
          }
        ], {
          type: remove_item,
          id: 0
        })
      ).toEqual(
        [
          {
            name: 'Milk',
            id: 1
          }
        ]
      )
    })
  })
})
