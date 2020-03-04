import { merge } from 'lodash'
import Tone from 'tone'
import * as synths from '../tunes/synths'
import * as ActionTypes from '../constants/appConstants'

const initialState = {
  synths: []
}

export default (state = initialState, action) => {
  const { type, id, synth, property, value } = action

  switch (type) {
    case ActionTypes.CREATE_SYNTH:
      console.log(state)
      let synthesizers = state.synths
      const newSynth = synths.toneSynth().toMaster()
      synthesizers.push({ name: 'Synth', id: Date.now(), instrument: newSynth })
      state.synths = synthesizers

      return merge({}, state)

    case ActionTypes.CHANGE_SYNTH_VALUE:
      let regexBefore = /(.*)\./
      let regexAfter = /\.(.*)/
      let propertyNamespace = property.match(regexBefore)[1]
      let propertyInNamespace = property.match(regexAfter)[1]

      state.synths.map(synth => {
        if (synth.id === id) {
          if (propertyNamespace == 'oscillator') {
            synth.instrument.oscillator[propertyInNamespace] = value
          } else if (propertyNamespace == 'envelope') {
            synth.instrument.envelope[propertyInNamespace] = value
          }
        }
      })

      return merge({}, state)

    default:
      return state
  }
}
