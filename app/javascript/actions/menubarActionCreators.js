import * as ActionTypes from '../constants/menubarConstants'
import { createSynth } from './appActionCreators'

export const setBpm = bpm => ({ type: ActionTypes.SET_BPM, value: bpm })

export const startTransport = started => ({
  type: ActionTypes.TRANSPORT_START,
  value: true
})

export const newSynth = synth => dispatch => {
  return dispatch(createSynth(synth))
}
