import { createStore } from 'redux'
import appReducer from '../reducers/appReducer'

const appStore = () => {
  const store = createStore(appReducer)
  return store
}

export default appStore
