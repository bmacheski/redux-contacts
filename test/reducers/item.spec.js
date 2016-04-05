import expect from 'expect'
import item from '../../client/reducers/item'
import { add_item, remove_item, complete_item } from '../../client/constants/ActionTypes'

describe('reducers', () => {
  describe('item reducer', () => {
    it('should provide the initial state', () => {
      expect(item(undefined, {})).toEqual(
        [
          {
            name: 'Bacon',
            bought: false,
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
            bought: false,
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
            bought: false,
            id: 0
          }, {
            name: 'Milk',
            bought: false,
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
            bought: false,
            id: 1
          }
        ]
      )
    })

    it('should handle a completed item', () => {
      expect(
        item([
          {
            name: 'Eggs',
            bought: false,
            id: 0
          }
        ], {
          type: complete_item,
          id: 0
        })
      ).toEqual(
        [
          {
            name: 'Eggs',
            bought: true,
            id: 0
          }
        ]
      )
    })
  })
})
