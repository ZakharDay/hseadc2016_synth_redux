import _ from 'lodash'
import React from 'react'
import Tone from 'tone'

import PlaySwitch from '../controls/PlaySwitch'
import ToggleButton from '../controls/ToggleButton'
import Slider from '../controls/Slider'
import Knob from '../controls/Knob'
import ButtonSet from '../controls/ButtonSet'

export default class ToneSynth extends React.Component {
  constructor(props) {
    super(props)
    _.bindAll(this, 'handleValueChange')
  }

  handleValueChange(id, property, value) {
    const { changeSynthValue } = this.props
    changeSynthValue(id, property, value)
  }

  render() {
    const { name, id, instrument, on, togglePlay } = this.props
    const { type, count, spread, phase, fadeIn } = instrument.oscillator
    const { attack, decay, sustain, release, attackCurve } = instrument.envelope
    const typeSet = ['sine', 'square', 'triangle', 'sawtooth', 'fatsawtooth']
    const curveSet = [
      'linear',
      'exponential',
      'sine',
      'cosine',
      'bounce',
      'ripple',
      'step'
    ]

    return (
      <div className="Synth">
        <ToggleButton text={name} on={on} handleClick={togglePlay} />

        <div className="controlsContainer">
          <div className="controlsRow">
            <h2>Oscillator</h2>

            <h2>Type</h2>
            <ButtonSet
              id={id}
              property="oscillator.type"
              set={typeSet}
              value={type}
              handleValueChange={this.handleValueChange}
            />

            <h2>Count</h2>
            <Slider
              id={id}
              property="oscillator.count"
              min="0"
              max="10"
              value={count}
              handleValueChange={this.handleValueChange}
            />

            <h2>Spread</h2>
            <Slider
              id={id}
              property="oscillator.spread"
              min="0"
              max="100"
              value={spread}
              handleValueChange={this.handleValueChange}
            />

            <h2>Phase</h2>
            <Slider
              id={id}
              property="oscillator.phase"
              min="0"
              max="100"
              value={phase}
              handleValueChange={this.handleValueChange}
            />

            <h2>Fade In</h2>
            <Slider
              id={id}
              property="oscillator.fadeIn"
              min="0"
              max="10"
              value={fadeIn}
              handleValueChange={this.handleValueChange}
            />

            <h2>Envelope</h2>

            <h2>Attack</h2>
            <Slider
              id={id}
              property="envelope.attack"
              min="0"
              max="1"
              value={attack}
              handleValueChange={this.handleValueChange}
            />

            <h2>Decay</h2>
            <Slider
              id={id}
              property="envelope.decay"
              min="0"
              max="1"
              value={decay}
              handleValueChange={this.handleValueChange}
            />

            <h2>Sustain</h2>
            <Slider
              id={id}
              property="envelope.sustain"
              min="0"
              max="1"
              value={sustain}
              handleValueChange={this.handleValueChange}
            />

            <h2>Release</h2>
            <Slider
              id={id}
              property="envelope.release"
              min="0"
              max="1"
              value={release}
              handleValueChange={this.handleValueChange}
            />

            <h2>Attack Curve</h2>
            <ButtonSet
              id={id}
              property="envelope.attackCurve"
              set={curveSet}
              value={attackCurve}
              handleValueChange={this.handleValueChange}
            />
          </div>
        </div>
      </div>
    )
  }
}
