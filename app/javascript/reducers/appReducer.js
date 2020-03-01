import * as ActionTypes from '../constants/appConstants'

export const initialState = {
  counter: {
    currentCounter: 0
  }
}

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      console.log('+')
      state.counter.currentCounter = state.counter.currentCounter + 1
      console.log(state)
      return state
    case 'DECREMENT':
      console.log('-')
      state.counter.currentCounter = state.counter.currentCounter - 1
      console.log(state)
      return state
    default:
      return state
  }
}
