import React, { Component } from 'react'

import ListItem from '../ListItem'
import style from './style.css'

class MainSection extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    const { items, completeItem } = this.props

    const list = items.map(item => {
      return (
        <ListItem
          key={item.id}
          text={item.name}
          item={item}
          completeItem={completeItem.bind(this, item.id)}>
        </ListItem>
      )
    })

    return (
      <div>
        <ul>
          {list}
        </ul>
      </div>
    )
  }
}

export default MainSection
