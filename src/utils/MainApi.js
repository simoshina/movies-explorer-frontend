class MainApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkResponse = (res) => {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject(`Ошибка: ${res.status}`)
  }

  getMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      headers: this._headers,
      credentials: 'include'
    })
    .then(this._checkResponse);
  }

  createMovie(film) {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'POST',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({
        country: film.country,
        director: film.director,
        duration: film.duration,
        year: film.year,
        description: film.description,
        image: `https://api.nomoreparties.co/${film.image.url}`,
        trailerLink: film.trailerLink,
        thumbnail: `https://api.nomoreparties.co/${film.image.formats.thumbnail.url}`,
        movieId: film.id,
        nameRU: film.nameRU,
        nameEN: film.nameEN
      })
    })
    .then(this._checkResponse);
  }

  deleteMovie(id) {
    return fetch(`${this._baseUrl}/movies/${id}`, {
      method: 'DELETE',
      headers: this._headers,
      credentials: 'include',
    })
    .then(this._checkResponse);
  }
}

export const api = new MainApi({
  baseUrl: `${window.location.protocol}${process.env.REACT_APP_API_URL || '//localhost:3000'}`,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  }
})