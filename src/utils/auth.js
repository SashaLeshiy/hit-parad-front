export const BASE_URL = 'https://hitapi.roooar.ru';

const checkResponse = (response) => {
  return response.ok ? response.json() :
    Promise.reject(new Error(`Ошибка ${response.status}: ${response.statusText}`));
};

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}

export const register = ({email, password}) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      email: email,
      password: password
    })
  })
    .then(res => checkResponse(res));
};

export const authorize = ({email, password}) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ email, password })
  })
    .then(res => checkResponse(res));
};

export const getContent = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    headers: {
      ...headers,
      "Authorization": `Bearer ${token}`
    }
  })
    .then(res => checkResponse(res));
};