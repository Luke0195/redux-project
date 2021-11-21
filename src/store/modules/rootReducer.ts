import { combineReducers } from 'redux'
import { StoreState } from '../createStore'
import AuthReducer from './auth/reducer'

export default combineReducers<StoreState>({
  auth: AuthReducer

})
