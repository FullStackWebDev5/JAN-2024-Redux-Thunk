import axios from 'axios'

export const FETCH_USERS_LOADING = 'FETCH_USERS_LOADING'
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE' 

export const fetchUsersLoading = () => ({
  type: FETCH_USERS_LOADING
})

export const fetchUsersSuccess = (users) => ({
  type: FETCH_USERS_SUCCESS,
  payload: users
})

export const fetchUsersFailure = (error) => ({
  type: FETCH_USERS_FAILURE,
  payload: error
})

export const fetchUsers = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchUsersLoading())
      const res = await axios.get('https://reqres.in/api/users')
      dispatch(fetchUsersSuccess(res.data.data))
    } catch (error) {
      dispatch(fetchUsersFailure(error))
    }  
  }
}

/*
  - fetchUsers
    - FETCH_USERS_LOADING
        loading: true
    - FETCH_USERS_SUCCESS
        users: action.payload
        loading: false
    - FETCH_USERS_FAILURE
        error: action.payload
        loading: false
*/