import { compose, createStore } from 'redux'
import appReducer from '../reducers/appReducer'

const appStore = preloadedState => {
  const store = createStore(
    appReducer,
    // preloadedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
  return store
}

export default appStore
