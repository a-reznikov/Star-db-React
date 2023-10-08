import React, { Component } from 'react';

import ItemList from '../item-list/item-list';
import ItemDetails from '../item-details/item-details';
import Row from '../row';

import './people-page.css';
import SwapiService from '../../services/swapi-service';
import ErrorBoundry from '../error-boundry';

export default class PeoplePage extends Component {

  swapiService = new SwapiService();

  state = {
    selectedItem: 3,
  };

  onPersonSelected = (selectedItem) => {
    this.setState({ selectedItem });
  };

  render() {

    const itemList = (
      <ItemList onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}>

        {(item) => `${item.name} (${item.birthYear})`}

      </ItemList>
    )

    const itemDetails = (
      <ErrorBoundry>
        <ItemDetails itemId={this.state.selectedItem} />
      </ErrorBoundry>
    )

    return (
      <Row left={itemList} right={itemDetails} />
    );
  }
}
