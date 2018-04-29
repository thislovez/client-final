import axios from 'axios'
const API_URL = 'http://localhost:7777/api/sport';

//Read
export function getSport() {
  const response = axios.get(API_URL);
  console.log('getsport', response);
  return{
    type: 'GET_SPORT',
    payload: response
  }
}

//CREATE
export function createSport(data) {
  const response = axios.post(API_URL, data);
  return {
    type: 'GET_SPORT',
    payload: response
  }
}

//DELETE
export function deleteSport(id) {
  const response = axios.delete(API_URL + '/' + id);
  return {
    type: 'GET_SPORT',
    payload: response
  }
}

//Update
export function updateSport(id,data) {
  const response = axios.put(API_URL + '/' +id , data)
  return {
    type: 'GET_SPORT',
    payload: response
  }
}
