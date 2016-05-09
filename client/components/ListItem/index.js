import React, { Component } from 'react';
import classnames from 'classnames';

import style from './style.css'; // eslint-disable-line no-unused-vars

class ListItem extends Component {
  render() {
    const { item, completeItem, text } = this.props;
    const classes = classnames({
      bought: item.bought
    });

    return (
      <li className={classes}>
        {text}
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

ListItem.propTypes = {
  item: React.PropTypes.object,
  completeItem: React.PropTypes.func,
  text: React.PropTypes.string
};

export default ListItem;
