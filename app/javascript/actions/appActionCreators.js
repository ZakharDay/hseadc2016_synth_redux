import * as ActionTypes from '../constants/appConstants'

export const setBpm = bpm => ({ type: ActionTypes.SET_BPM, value: bpm })

export const startTransport = started => ({
  type: ActionTypes.TRANSPORT_START,
  value: true
})

export const addSynth = synth => ({ type: ActionTypes.ADD_SYNTH, synth })

export const changeSynthValue = (id, property, value) => ({
  type: ActionTypes.CHANGE_SYNTH_VALUE,
  id,
  property,
  value
})
