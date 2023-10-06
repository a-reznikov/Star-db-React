import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner'

import './item-list.css';

export default class ItemList extends Component {

  swapiService = new SwapiService();

  state = {
    peopleList: null,
    loading: true,
  }

  componentDidMount() {
    this.swapiService.getAllPeople().then((peopleList) =>
      this.setState({ peopleList, loading: false }));
  }

  renderItem(people) {
    return people.map(({ id, name }) => {
      return (
        <li className="list-group-item"
          key={id}
          onClick={() => this.props.onItemSelected(id)}>
          {name}
        </li>)
    });
  }

  render() {
    const { peopleList, loading } = this.state;

    const spinner = loading ? <Spinner /> : null;
    const content = !loading ? this.renderItem(peopleList) : null;

    return (
      <ul className="item-list list-group">
        {spinner}
        {content}
      </ul>
    );
  }
}
