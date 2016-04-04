import { connect } from 'react-redux'
import React, { Component, PropTypes } from 'react'

import MainSection from '../../components/MainSection'

class App extends Component {

  render() {
    const { items } = this.props

    return (
      <div>
        <MainSection
          items={items}
        />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    items: state.item
  }
}

export default connect(
  mapStateToProps
)(App)
