import { merge } from 'lodash'
import Tone from 'tone'
import * as synths from '../tunes/synths'
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
    case ActionTypes.ADD_SYNTH:
      let synthesizers = state.synths
      const newSynth = synths.toneSynth().toMaster()
      console.log('1', synthesizers)

      synthesizers.push({
        // type: synthType,
        // name: synthName,
        id: Date.now(),
        instrument: newSynth
      })

      console.log('2', synthesizers)

      state.synths = synthesizers

      return merge({}, state)
    case ActionTypes.CHANGE_SYNTH_VALUE:
      console.log('inside', id, property, value)
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

      // let synth = this.state[synth]

      // if (synth == 'bassSynth' || synth == 'leadSynth') {
      //   if (propertyNamespace == 'oscillator') {
      //     synth.voices[0].oscillator[propertyInNamespace] = value
      //   } else if (propertyNamespace == 'envelope') {
      //     synth.voices[0].envelope[propertyInNamespace] = value
      //   }
      // } else {
      // synth[property] = value
      // }

      // this.setState({
      //   [`${synth}`]: synth
      // })

      return merge({}, state)
    default:
      return state
  }
}
