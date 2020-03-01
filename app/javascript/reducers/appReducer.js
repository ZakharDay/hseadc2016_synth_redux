import * as ActionTypes from '../constants/appConstants'

export const initialState = {}

export default function appReducer(state = initialState, action) {
  const { type, value, text } = action

  switch (type) {
    default:
      return state
  }
}
