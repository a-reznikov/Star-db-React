import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom'
import Header from '../header';
import SwapiService from "../../services/swapi-service";
import ErrorBoundry from '../error-boundry';
import { SwapiServiceProvider } from '../swapi-service-context';
import DummySwapiService from '../../services/dummy-swapi-service';
import RandomPlanet from '../random-planet';
import { PeoplePage, PlanetsPage, StarshipsPage } from '../pages';

import './app.css';
import StarshipDetails from '../sw-components/starship-details';


const App = () => {

  const swapiService = new SwapiService();

  // const [swapi, setSwapiService] = useState(swapiService);

  // const Service = swapi instanceof SwapiService ?
  //   DummySwapiService : swapi;

  // console.log(Service);

  // setSwapiService(new Service());


  function ShowDetails() {
    const { id } = useParams();

    return <StarshipDetails itemId={id} />
  }


  return (
    <ErrorBoundry>
      <SwapiServiceProvider value={swapiService} >
        <Router>

          <div className="stardb-app">
            <Header onServiceChange={() => { }} />

            <RandomPlanet />

            <Routes>

              <Route path='/' exact element={<h2>Welcome to StarDB</h2>} />
              <Route path='/people/:id?' element={<PeoplePage />} />
              <Route path='/planets' element={<PlanetsPage />} />
              <Route path='/starships' exact element={<StarshipsPage />} />
              <Route path='/starships/:id' element={<ShowDetails />}
              />

            </Routes>

          </div>

        </Router>
      </SwapiServiceProvider>
    </ErrorBoundry>
  );

};

export default App;