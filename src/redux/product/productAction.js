import axios from 'axios'
import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
} from './productType'

export const fetchData = () => {
  return (dispatch) => {
    dispatch(fetchDataRequest())
    axios
      .get("JS/data.json")
      .then(response => {
        const data = response.data
        dispatch(fetchDataSuccess(data))
      })
      .catch(error => {
        dispatch(fetchDataFailure(error.message))
      })
  }
}

export const fetchDataRequest = () => {
  return {
    type: FETCH_DATA_REQUEST
  }
}

export const fetchDataSuccess = data => {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: data
  }
}

export const fetchDataFailure = error => {
  return {
    type: FETCH_DATA_FAILURE,
    payload: error
  }
}
