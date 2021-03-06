import { createStore } from 'redux'
import appReducer from '../reducers/appReducer'

const configureStore = preloadedState => {
  const store = createStore(appReducer, preloadedState)
  return store
}

export default configureStore
