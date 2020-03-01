import * as ActionTypes from '../constants/appConstants'

export const initialState = 0

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      console.log('+')
      return state + 1
    case 'DECREMENT':
      console.log('-')
      return state - 1
    default:
      return state
  }
}
