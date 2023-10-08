import React, { Component } from 'react';

import Header from '../header';

import './app.css';
import SwapiService from "../../services/swapi-service";
import ErrorBoundry from '../error-boundry';
import { PersonList, PlanetList, StarshipList } from '../sw-components/item-lists';
import { PersonDetails, PlanetDetails, StarshipDetails } from '../sw-components/details';


export default class App extends Component {

  swapiService = new SwapiService();

  render() {
    return (
      <ErrorBoundry>
        <div className='stardb-app'>
          <Header />
          <PersonDetails itemId={11} />

          <PlanetDetails itemId={5} />

          <StarshipDetails itemId={9} />

          <PersonList />

          <PlanetList />

          <StarshipList />

        </div>
      </ErrorBoundry >
    );
  }

};