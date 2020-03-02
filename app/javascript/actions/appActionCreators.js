import Tone from 'tone'
import * as ActionTypes from '../constants/appConstants'
import * as synths from '../tunes/synths'

export const setBpm = bpm => {
  Tone.Transport.bpm.value = bpm

  return {
    type: ActionTypes.SET_BPM,
    value: bpm
  }
}

export const transportStart = () => {
  Tone.Transport.start()

  return {
    type: ActionTypes.TRANSPORT_START,
    value: true
  }
}

export const addSynth = (synthType, synthName) => {
  // add type
  const synth = synths.toneSynth().toMaster()

  return {
    type: ActionTypes.ADD_SYNTH,
    name: 'synth',
    synth
  }
}

// export const changeSynthValue = (synth, property, value) => {
//   let regexBefore = /(.*)\./
//   let regexAfter = /\.(.*)/
//   let propertyNamespace = property.match(regexBefore)[1]
//   let propertyInNamespace = property.match(regexAfter)[1]
//
//   // let synth = this.state[synth]
//
//   // if (synth == 'bassSynth' || synth == 'leadSynth') {
//   //   if (propertyNamespace == 'oscillator') {
//   //     synth.voices[0].oscillator[propertyInNamespace] = value
//   //   } else if (propertyNamespace == 'envelope') {
//   //     synth.voices[0].envelope[propertyInNamespace] = value
//   //   }
//   // } else {
//   synth[property] = value
//   // }
//
//   // this.setState({
//   //   [`${synth}`]: synth
//   // })
//
//   return {
//     type: ActionTypes.CHANGE_SYNTH_VALUE,
//     synth: '',
//     property: '',
//     value: true
//   }
// }
