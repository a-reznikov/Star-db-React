export default class SwapiService {

  _apiBase = 'https://swapi.dev/api';

  async getResource(url) {
    const response = await fetch(`${this._apiBase}${url}`);

    if (!response.ok) {
      throw new Error(`Could not fetch ${`${this._apiBase}${url}`}, received ${response.status}`)
    }
    const body = await response.json();

    return body;
  }

  async getAllPeople() {
    return await this.getResource('/people/').then((body) => console.log(body.results));
  }

  async getPerson(id) {
    return await this.getResource(`/people/${id}/`).then((body) => console.log(body.name));
  }

  async getAllPlanets() {
    return await this.getResource('/planets/').then((body) => console.log(body.results));
  }

  async getPlanet(id) {
    return await this.getResource(`/planets/${id}/`).then((body) => console.log(body.name));
  }

  async getAllStarships() {
    return await this.getResource('/starships/').then((body) => console.log(body.results));
  }

  async getStarship(id) {
    return await this.getResource(`/starships/${id}/`).then((body) => console.log(body.name));
  }
}