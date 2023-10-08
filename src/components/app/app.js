import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page/people-page';
import ErrorButton from '../error-button/error-button';
import ErrorIndicator from '../error-indicator/error-indicator';

import './app.css';
import ItemList from "../item-list/item-list";
import ItemDetails, { Record } from "../item-details/item-details";
import SwapiService from "../../services/swapi-service";
import Row from '../row';
import ErrorBoundry from '../error-boundry';


export default class App extends Component {

  swapiService = new SwapiService();

  render() {
    const { getPerson, getStarship, getPersonImage, getStarshipImage } = this.swapiService;

    const personDetails = (
      <ItemDetails
        itemId={11}
        getData={getPerson}
        getImageUrl={getPersonImage} >

        <Record field="gender" label="Gender" />
        <Record field="eyeColor" label="Eye Color" />

      </ItemDetails>
    );

    const starshipDetails = (
      <ItemDetails
        itemId={5}
        getData={getStarship}
        getImageUrl={getStarshipImage}>

        <Record field="model" label="Model" />
        <Record field="length" label="Length" />
        <Record field="costInCredits" label="Cost" />
      </ItemDetails>
    );

    return (
      <ErrorBoundry>
        <div className='stardb-app'>
          <Header />
          <Row left={personDetails} right={starshipDetails} />
          {/* <RandomPlanet />
          <ErrorButton />
          <PeoplePage /> */}
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
      </ErrorBoundry>
    );
  }

};