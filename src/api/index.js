import axios from 'axios'
import router from '@/router'

const DOMAIN = process.env.BASE_URL
const UNAUTHORIZED = 401
const onUnauthorized = () => {
  router.push('/login?rPath=${encodeURIComponent(location.pathname)}')
}

const request = (method, obj, data) => {
  return axios({
    method,
    url: DOMAIN + 'data/data.json',
    data
  }).then((result) => result.data[obj])
    .catch(result => {
      const {status} = result.response
      if(status === UNAUTHORIZED) return onUnauthorized()
      throw Error(result)
    })
}

export const board = {
  fetch(name) {
    return request('get', name)
  }
}

const requestFake = (method, url, data) => {
  return axios({
    method,
    url,
    data
  }).then(result => result.data)
    .catch(result => {
      const {status} = result.response
      if (status === UNAUTHORIZED) onUnauthorized()
      throw result.response
    })
}

export const boardFake = {
  fetch(id) {
    const url = 'https://jsonplaceholder.typicode.com/posts'
    return id ? requestFake('get', `${url}/${id}`) : requestFake('get', url)
  },
  create(payload) {
    const url = 'https://jsonplaceholder.typicode.com/posts'
    return requestFake('post', url, payload)
  },
  update(id, payload) {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`
    return requestFake('put', url, payload)
  },
  destroy(id) {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`
    return requestFake('delete', url)
  }
}

export const authFake = {
  login(email, password) {
    return requestFake('post', 'https://reqres.in/api/login', {email, password})
  }
}