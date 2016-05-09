import { connect } from 'react-redux';
import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';

import * as ListActions from '../../actions';
import MainSection from '../../components/MainSection';
import Header from '../../components/Header';
import style from './style.css'; // eslint-disable-line no-unused-vars

class App extends Component {
  render() {
    const { items, actions } = this.props;

    return (
      <div className="container">
        <h1>Grocery List</h1>
        <Header addItem={actions.addItem} />
        <MainSection
          items={items}
          completeItem={actions.completeItem}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: state.item
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ListActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
