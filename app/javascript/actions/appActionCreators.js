import Tone from 'tone'
import appStore from '../store/appStore'
import * as ActionTypes from '../constants/appConstants'
import * as synths from '../tunes/synths'

// prettier-ignore
const saveBpm = bpm => ({ type: ActionTypes.SET_BPM, value: bpm })
// prettier-ignore
const saveTransport = started => ({ type: ActionTypes.TRANSPORT_START, value: true })
// prettier-ignore
const saveSynth = synth => ({ type: ActionTypes.ADD_SYNTH, synth })
// prettier-ignore
const saveSynthValue = (synth, property, value) => ({ type: ActionTypes.SAVE_SYNTH_VALUE, synth, property, value })

export const setBpm = bpm => (dispatch, getState) => {
  Tone.Transport.bpm.value = bpm
  return dispatch(saveBpm(bpm))
}

export const startTransport = () => (dispatch, getState) => {
  Tone.Transport.start()
  return dispatch(saveTransport(true))
}

export const addSynth = () => (dispatch, getState) => {
  const synth = synths.toneSynth().toMaster()
  return dispatch(saveSynth(synth))
}

// prettier-ignore
export const changeSynthValue = (synth, property, value) => (dispatch, getState) => {
  console.log('inside', synth, property, value, dispatch, getState)
  let regexBefore = /(.*)\./
  let regexAfter = /\.(.*)/
  let propertyNamespace = property.match(regexBefore)[1]
  let propertyInNamespace = property.match(regexAfter)[1]

  console.log(getState().synths)

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

  return dispatch(saveSynthValue(synth, property, value))
}
