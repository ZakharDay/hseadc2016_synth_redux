import Tone from 'tone'

// const toneSynth = () => {
//   return new Tone.Synth({
//     oscillator: {
//       type: 'triangle'
//     },
//     envelope: {
//       attack: 0.005,
//       decay: 0.1,
//       sustain: 0.3,
//       release: 1
//     }
//   })
// }

function toneSynth() {
  return new Tone.Synth({
    oscillator: {
      type: 'triangle'
    },
    envelope: {
      attack: 0.005,
      decay: 0.1,
      sustain: 0.3,
      release: 1
    }
  })
}

export { toneSynth }
