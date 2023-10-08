import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page/people-page';
import ErrorButton from '../error-button/error-button';
import ErrorIndicator from '../error-indicator/error-indicator';

import './app.css';
import ItemList from "../item-list/item-list";
import ItemDetails from "../item-details/item-details";
import SwapiService from "../../services/swapi-service";
import Row from '../row';


export default class App extends Component {

  swapiService = new SwapiService();

  state = {
    hasError: false
  };

  componentDidCatch(error, info) {

    this.setState({
      hasError: true
    });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    return (
      <div className='main'>
        <Header />
        <RandomPlanet />
        <ErrorButton />
        <PeoplePage />
        {/* <Row left={<ItemList onItemSelected={this.onPersonSelected}
          getData={this.swapiService.getAllPlanets}
          renderItem={({ name }) => name} />} right={
            <ItemDetails personId={this.state.selectedPerson} />
          } />
        <Row left={<ItemList onItemSelected={this.onPersonSelected}
          getData={this.swapiService.getAllStarships}
          renderItem={(item) => item.name} />} right={
            <ItemDetails personId={this.state.selectedPerson} />
          } /> */}
      </div>
    );
  }

};