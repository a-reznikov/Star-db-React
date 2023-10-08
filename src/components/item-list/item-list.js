import React, { Component } from 'react';
import Spinner from '../spinner'

import './item-list.css';

export default class ItemList extends Component {

  state = {
    itemList: null,
    loading: true,
  }

  componentDidMount() {
    const { getData } = this.props;
    getData().then((itemList) =>
      this.setState({ itemList, loading: false }));
  }

  renderItem(items) {
    return items.map((item) => {
      const { id } = item;
      const label = this.props.children(item);
      return (
        <li className="list-group-item"
          key={id}
          onClick={() => this.props.onItemSelected(id)}>
          {label}
        </li>)
    });
  }

  render() {
    const { itemList, loading } = this.state;

    const spinner = loading ? <Spinner /> : null;
    const content = !loading ? this.renderItem(itemList) : null;

    return (
      <ul className="item-list list-group">
        {spinner}
        {content}
      </ul>
    );
  }
}
