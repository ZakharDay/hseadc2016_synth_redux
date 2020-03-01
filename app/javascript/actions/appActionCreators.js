import * as ActionTypes from '../constants/appConstants'

export function increment() {
  return {
    type: ActionTypes.INCREMENT
  }
}

export function decrement() {
  return {
    type: ActionTypes.DECREMENT
  }
}
