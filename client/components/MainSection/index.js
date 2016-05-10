import React, { Component } from 'react';

import ListItem from '../ListItem';
import style from './style.css'; // eslint-disable-line no-unused-vars

class MainSection extends Component {
  render() {
    const { items, completeItem } = this.props;
    const list = items.map(item => {
      return (
        <ListItem
          key={item.id}
          text={item.name}
          item={item}
          completeItem={() => completeItem(item)}
        />
      );
    });

    return (
      <div>
        <ul>
          {list}
        </ul>
      </div>
    );
  }
}

MainSection.propTypes = {
  items: React.PropTypes.array,
  completeItem: React.PropTypes.func
};

export default MainSection;
