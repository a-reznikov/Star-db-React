import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner'
import ErrorButton from '../error-button/error-button';

import './person-details.css';


export default class PersonDetails extends Component {

  swapiService = new SwapiService();

  state = {
    person: null,
    loading: true,
  }

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    if (this.props.personId !== prevProps.personId) {
      this.updatePerson();
    }
  }

  updatePerson() {
    this.setState({ loading: true });
    const { personId } = this.props;
    console.log('personId', personId);
    if (!personId) {
      return;
    }

    this.swapiService
      .getPerson(personId)
      .then((person) => {
        this.setState({ person, loading: false });
      });
  }

  renderDetails() {
    const { person: { id, name, gender, birthYear, eyeColor } } = this.state;
    console.log('eyeColor', eyeColor)

    return (
      <React.Fragment>
        <img className="person-image"
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
          alt='person' />
        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>{gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>{birthYear}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span>{eyeColor}</span>
            </li>
          </ul>
        </div>
      </React.Fragment>
    )
  }

  render() {
    const { loading } = this.state;
    const spinner = loading ? <Spinner /> : null;
    const content = !loading ? this.renderDetails() : null;


    return (
      <div className="person-details card">
        {spinner}
        {content}
      </div>
    )
  }
}
