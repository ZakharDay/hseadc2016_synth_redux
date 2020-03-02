import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Tone from 'tone'
import * as appActionCreators from '../actions/appActionCreators'

import ToneSynth from '../components/synths/ToneSynth'

function select(state) {
  return { appStore: state }
}

class App extends Component {
  constructor(props) {
    super(props)
    this.toggleNote = this.toggleNote.bind(this)
  }

  componentDidMount() {
    const { dispatch, appStore } = this.props
    const actions = bindActionCreators(appActionCreators, dispatch)
    dispatch(actions.setBpm(90))
    dispatch(actions.addSynth('ToneSynth', 'synth'))
  }

  toggleNote() {
    const { appStore } = this.props
    const synth = appStore.synths[0]
    synth.triggerAttackRelease('C4', '1n')
  }

  render() {
    const { dispatch, appStore } = this.props
    const actions = bindActionCreators(appActionCreators, dispatch)
    console.log(appStore)

    let synthElements = []

    appStore.synths.map((synth, i) => {
      synthElements.push(
        <ToneSynth
          synth="synth"
          instrument={synth.instrument}
          actions={actions}
          key={i}
        />
      )
    })

    return (
      <div>
        <div onClick={() => dispatch(actions.transportStart())}>Start</div>
        <div onClick={() => dispatch(actions.addSynth('ToneSynth', 'sunth2'))}>
          Add Synth
        </div>
        {synthElements}
        <div onClick={this.toggleNote}>Beep</div>
      </div>
    )
  }
}

export default connect(select)(App)
