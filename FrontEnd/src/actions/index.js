import axios from 'axios'
import { UNAUTH_USER, AUTH_USER, AUTH_ERROR, FETCH_MESSAGE } from './types'
const ROOT_URL = 'http://localhost:3090'

export function signinUser({email, password}) {

  return function (dispatch) {

    // submit email and password to server
    const request = axios.get(`${ROOT_URL}/api/get/user/${email}`)
    request
      .then(response => {
        // -Save the JWT token
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('userId', response.data._id);
        localStorage.setItem('user', response.data.email);
        console.log('user email', localStorage.getItem('user'));
        // -if request is good, we need to update state to indicate user is authenticated
        dispatch({type: AUTH_USER})
      })

      // If request is bad...
      // -Show an error to the user
      .catch(() => {
        dispatch(authError('bad login info'))
      })

  }
}

export function signoutUser() {
  localStorage.removeItem('token')
  return {
    type: UNAUTH_USER
  }
}

export function signupUser({email, password, passwordConfirmation}) {
  return function (dispatch) {
    axios.post(`${ROOT_URL}/api/post/user`, {email, password})
      .then(response => {
        console.log('response', response.data.email)
        dispatch({type: AUTH_USER})
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('user', response.data.email);
        localStorage.setItem('userId', response.data._id);
      })
      .catch(({response}) => {
        dispatch(authError(response.data.error))
      })
  }
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}

export function fetchMessage() {
  return function (dispatch) {
    axios.get(ROOT_URL, {
      headers: {authorization: localStorage.getItem('token')}
    })
      .then(response => {
        dispatch({
          type: FETCH_MESSAGE,
          payload: response.data.message
        })
      })
  }
}