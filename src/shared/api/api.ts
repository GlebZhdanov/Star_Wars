export type TApiConfig = {
  url: string,
}

export class Api {
  _url: string;

  constructor({ url }: TApiConfig) {
    this._url = url;
  }

  getLoadDataPeople = () => {
    const page = [1, 2, 3, 4, 5, 6, 7, 8];
    try {
      const requests = page.map((number) => fetch(`${this._url}/?page=${number}`));
      return Promise.all(requests)
        .then((responses) => Promise.all(responses.map((r) => r.json())));
    } catch (e) {
      console.log(e);
    }
  };
}
const api = new Api({
  url: 'https://swapi.dev/api/people',
});

export { api };
