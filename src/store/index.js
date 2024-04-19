import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension';
import userReducer from '../reducers/user.js'
import { thunk } from 'redux-thunk'

const reducer = combineReducers({
  userReducer
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store