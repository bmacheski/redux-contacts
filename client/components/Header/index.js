import React, { Component } from 'react';

import style from './style.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
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
          onChange={this.handleChange.bind(this)}
          onKeyDown={this.handleSave.bind(this)}
        />
      </div>
    );
  }
}

export default Header;
