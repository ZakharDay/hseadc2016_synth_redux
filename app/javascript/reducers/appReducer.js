import { merge } from 'lodash'
import * as ActionTypes from '../constants/appConstants'

const initialState = {
  bpm: 120,
  started: false,
  synths: [
    // {
    //   type: 'ToneSynth',
    //   instrument: synths.synth
    // }
  ]
}

export default (state = initialState, action) => {
  const { type, value, synthType, synthName, synth } = action

  switch (type) {
    case ActionTypes.SET_BPM:
      state.bpm = value
      return merge({}, state)
    case ActionTypes.TRANSPORT_START:
      state.started = true
      return merge({}, state)
    case ActionTypes.ADD_SYNTH:
      let synths = state.synths
      console.log('1', synths)

      synths.push({
        type: synthType,
        name: synthName,
        instrument: synth
      })

      console.log('2', synths)

      state.synths = synths

      return merge({}, state)
    default:
      return state
  }
}
