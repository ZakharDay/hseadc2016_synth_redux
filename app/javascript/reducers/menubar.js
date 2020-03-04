import { merge } from 'lodash'
import Tone from 'tone'
import * as synths from '../tunes/synths'
import * as ActionTypes from '../constants/menubarConstants'

const initialState = {
  bpm: 120,
  started: false
}

export default (state = initialState, action) => {
  const { type, id, synth, property, value } = action

  switch (type) {
    case ActionTypes.SET_BPM:
      Tone.Transport.bpm.value = value
      state.bpm = value

      return merge({}, state)

    case ActionTypes.TRANSPORT_START:
      Tone.Transport.start()
      state.started = true

      return merge({}, state)

    default:
      return state
  }
}
