import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Tone from 'tone'
import * as appActionCreators from '../actions/appActionCreators'

import ToneSynth from '../components/synths/ToneSynth'

const select = state => {
  return { store: state.app }
}

class App extends Component {
  constructor(props) {
    super(props)
    _.bindAll(this, 'toggleNote')
  }

  toggleNote() {
    const { store } = this.props
    const synth = store.synths[0]
    synth.instrument.triggerAttackRelease('C4', '1n')
  }

  render() {
    const { dispatch, store } = this.props
    const actions = bindActionCreators(appActionCreators, dispatch)

    let synthElements = []

    store.synths.map((synth, i) => {
      synthElements.push(
        <ToneSynth
          name={synth.name}
          id={synth.id}
          instrument={synth.instrument}
          changeSynthValue={(id, property, value) => {
            actions.changeSynthValue(id, property, value)
          }}
          key={i}
        />
      )
    })

    return (
      <div>
        {synthElements}
        <div onClick={this.toggleNote}>Toggle Note</div>
      </div>
    )
  }
}

export default connect(select)(App)
