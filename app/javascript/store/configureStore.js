import { createStore } from 'redux'
import appReducer from '../reducers/appReducer'

const configureStore = preloadedState => {
  const store = createStore(appReducer, preloadedState)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      store.replaceReducer(appReducer)
    })
  }

  return store
}

export default configureStore
