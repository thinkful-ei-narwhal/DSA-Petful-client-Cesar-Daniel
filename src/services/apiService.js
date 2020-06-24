import config from '../config';

const apiService = {
  getPets(){
    let error;
    return fetch(`${config.API_ENDPOINT}/pets`, {
      method: 'GET',
      headers: {}
      })
      .then(res => {
        if (!res.ok) {
          error = { code: res.status};
        }
        return res.json();
      })
      .then(data => {
        if (error) {
          error.message = data.message;
          return Promise.reject(error);
        }
        return data})
  },

  deletePet(type) {
    let error;
    return fetch(`${config.API_ENDPOINT}/pets/${type}`, {
      method: 'DELETE',
      headers: {
      },
      })
      .then(res => {
        if (!res.ok) {
          error = { code: res.status};
        }
        return res.json();
      })
      .then(data => {
        if (error) {
          error.message = data.message;
          return Promise.reject(error);
        }
        return data})
  },

  getPeople(){
    let error;
    return fetch(`${config.API_ENDPOINT}/people`, {
      method: 'GET',
      headers: {}
      })
      .then(res => {
        if (!res.ok) {
          error = { code: res.status};
        }
        return res.json();
      })
      .then(data => {
        if (error) {
          error.message = data.message;
          return Promise.reject(error);
        }
        return data})
  },

  postPerson(n){
    return fetch(`${config.API_ENDPOINT}/people`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        name: n
      })
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },

  deletePerson() {
    let error;
    return fetch(`${config.API_ENDPOINT}/people`, {
      method: 'DELETE',
      headers: {
      },
      })
      .then(data => {
        if (error) {
          error.message = data.message;
          return Promise.reject(error);
        }
        return data})
  },
}

export default apiService;