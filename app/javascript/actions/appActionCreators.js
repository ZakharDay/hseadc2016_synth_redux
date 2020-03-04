import * as ActionTypes from '../constants/appConstants'

export const createSynth = synth => ({ type: ActionTypes.CREATE_SYNTH, synth })

export const changeSynthValue = (id, property, value) => ({
  type: ActionTypes.CHANGE_SYNTH_VALUE,
  id,
  property,
  value
})
