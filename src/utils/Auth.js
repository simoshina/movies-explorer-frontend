class Auth {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers
  }

  _checkResponse = (res) => {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject(`Ошибка: ${res.status}`)
  }

  register(name, email, password) {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({ name, email, password })
    })
    .then(this._checkResponse);
  }

  login(email, password) {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({ email, password })
    })
    .then(this._checkResponse);
  }

  getProfile() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      credentials: 'include',
      headers: this._headers
    })
    .then(this._checkResponse)
  }

  editProfile(data) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({
        name: data.name,
        email: data.email
      })
    })
    .then(this._checkResponse);
  }

  signout() {
    return fetch(`${this._baseUrl}/signout`, {
      method: 'POST',
      headers: this._headers,
      credentials: 'include'
    })
    .then(this._checkResponse);
  }
}

export const auth = new Auth({
  baseUrl: `${window.location.protocol}${process.env.REACT_APP_API_URL || '//localhost:3000'}`,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  }
})