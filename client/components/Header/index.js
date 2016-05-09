import React, { Component } from 'react';

import style from './style.css'; // eslint-disable-line no-unused-vars

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSave(e) {
    const name = e.target.value.trim();

    if (e.which === 13) {
      this.props.addItem(name);
      this.setState({ text: '' });
    }
  }

  render() {
    return (
      <div className="header">
        <input
          className="newitem"
          placeholder="Enter a new item"
          value={this.state.text}
          onChange={this.handleChange}
          onKeyDown={this.handleSave}
        />
      </div>
    );
  }
}

Header.propTypes = {
  addItem: React.PropTypes.func
};

export default Header;
