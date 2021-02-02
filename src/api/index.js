import axios from 'axios'
import router from '@/router'

const DOMAIN = process.env.BASE_URL
const UNAUTHORIZED = 401
const onUnauthorized = () => {
  router.push('/login')
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
  fetch(obj) {
    return request('get', obj)
  }
}

export const auth = {
  login(name, password) {
    return request('get', 'login',  {name, password})
      .then(data => new Promise((resolve, reject) => {
        if(data['password'] === password){
          resolve(data);
        }
        else{
          reject('Password is 1111');
        }
      }))
  }
}