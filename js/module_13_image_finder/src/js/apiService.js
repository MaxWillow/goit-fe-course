const BASE_URL = 'https://pixabay.com/api/';
const KEY = '14260445-94202652c4e141397bd31e336';

export default {
  page: 1,
  query: '',

  fetchImages() {
    const requestParams = `?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=12&key=`;

    return fetch(BASE_URL + requestParams + KEY)
      .then(response => response.json())
      .then(parsedData => {
        this.incrementPage();
        return parsedData.hits;
      });
  },

  get searchQuery() {
    return this.query;
  },

  set searchQuery(string) {
    this.query = string;
  },

  incrementPage() {
    this.page += 1;
  },

  resetPage() {
    this.page = 1;
  },
};
