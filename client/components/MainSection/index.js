import React, { Component } from 'react'

class MainSection extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    const { items } = this.props
    const list = items.map((item) => { return <li key={item.id}>{item.name}</li> })

    return (
      <div>
        <h1>List</h1>
        <ul>
          {list}
        </ul>
      </div>
    )
  }
}

export default MainSection
