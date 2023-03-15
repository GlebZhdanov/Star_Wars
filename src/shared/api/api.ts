// eslint-disable-next-line import/no-named-default
import { default as axios } from 'axios';

export type TApiConfig = {
  url: string,
}

export class Api {
  _url: string;

  constructor({ url }: TApiConfig) {
    this._url = url;
  }

  getPeopleData = async () => {
    try {
      await Promise.all([1, 2, 3, 4, 5, 6, 7, 8].map(
        (number) => axios.get(`${this._url}/?page=${number}`),
      ))
        .then((responses) => console.log(responses));
    } catch (e) {
      console.log(e.code);
    }
  };
}

const api = new Api({
  url: 'https://swapi.dev/api/people',
});

export { api };
