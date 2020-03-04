import { combineReducers } from 'redux'
import menubar from './menubar'
import app from './app'

export default combineReducers({
  menubar,
  app
})
