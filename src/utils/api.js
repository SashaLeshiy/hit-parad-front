export default class Api {
    constructor(config) {
        this.url = config.url;
        this.headers = config.headers;
    } 

    
getUserInfo() {
  const token = localStorage.getItem('token');

  return fetch(`${this.url}/users/me`, {
    headers: {
      authorization: 'Bearer ' + token,
      'Content-Type': 'application/json',
    }
    })  
    .then(this._checkResponse)
    .then(data => {
          return data;
    })
}

getInitialCards() {   
  // const token = localStorage.getItem('token');
    return fetch(`${this.url}/cards`, {
        headers: {
          // authorization: 'Bearer ' + token,
          'Content-Type': 'application/json',
        }
        })
    .then(this._checkResponse)
    .then(data => {
        return data;
        })   
 }

setUser(userName, info) {
  const token = localStorage.getItem('token');
  return fetch(`${this.url}/users/me`, {
  method: 'PATCH',
  headers: {
    authorization: 'Bearer ' + token,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: userName,
    about: info
  }),
  })
  .then(this._checkResponse);
}

setCard(link) {
  const token = localStorage.getItem('token');
  return fetch(`${this.url}/cards`, {
  method: 'POST',
  headers: {
    authorization: 'Bearer ' + token,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    // name: cardName,
    link: link
  }),
  })
  .then(this._checkResponse)
}

deleteCard(cardId) {
  const token = localStorage.getItem('token');
  return fetch(`${this.url}/cards/${cardId}`, {
    method: 'DELETE',
    headers: {
      authorization: 'Bearer ' + token,
      'Content-Type': 'application/json',
    }
    })
    .then(this._checkResponse)
}

putLike(cardId) {
  const token = localStorage.getItem('token');
  return fetch(`${this.url}/cards/${cardId}/likes`, {
    method: 'PUT',
    headers: {
      authorization: 'Bearer ' + token,
      'Content-Type': 'application/json',
    }
    })
    .then(this._checkResponse)
}

putListen(cardId) {
  const token = localStorage.getItem('token');
  return fetch(`${this.url}/cards/${cardId}/listen`, {
    method: 'PUT',
    headers: {
      authorization: 'Bearer ' + token,
      'Content-Type': 'application/json',
    }
    })
    .then(this._checkResponse)
}

deleteLike(cardId) {
  const token = localStorage.getItem('token');
  return fetch(`${this.url}/cards/${cardId}/likes`, {
    method: 'DELETE',
    headers: {
      authorization: 'Bearer ' + token,
      'Content-Type': 'application/json',
    }
    })
    .then(this._checkResponse)
}

setAvatar(link) {
  const token = localStorage.getItem('token');
  return fetch(`${this.url}/users/me/avatar`, {
    method: 'PATCH',
    headers: {
      authorization: 'Bearer ' + token,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      avatar: link
    }),
    })
    .then(this._checkResponse)
}

_checkResponse(res) {
  if (res.ok) {
      return res.json();
  }
  return Promise.reject(`Ошибка ${res.status}`);
}

}

const token = localStorage.getItem('token');

const config = {
  url: 'http://localhost:3000',
  headers: {
    authorization: 'Bearer ' + token,
    'Content-Type': 'application/json',
  }
};


export const api = new Api(config);