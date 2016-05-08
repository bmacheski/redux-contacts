import React, { Component } from 'react';
import classnames from 'classnames';

import style from './style.css';

class ListItem extends Component {
  render() {
    const { item, completeItem } = this.props;
    const classes = classnames({
      'bought': item.bought
    });

    return (
      <li className={classes}>
        {this.props.text}
        <input
          className="check"
          type="checkbox"
          checked={item.bought}
          onChange={() => completeItem()}
        />
      </li>
    );
  }
}

export default ListItem;
