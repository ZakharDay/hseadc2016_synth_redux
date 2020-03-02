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
    const { dispatch } = this.props
    const actions = bindActionCreators(appActionCreators, dispatch)
    actions.setBpm(90)
  }

  toggleNote() {
    const { appStore } = this.props
    const synth = appStore.synths[0]
    synth.instrument.triggerAttackRelease('C4', '1n')
  }

  render() {
    const { dispatch, appStore } = this.props
    const actions = bindActionCreators(appActionCreators, dispatch)

    let synthElements = []

    appStore.synths.map((synth, i) => {
      synthElements.push(
        <ToneSynth
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
        <div onClick={() => actions.startTransport()}>Start</div>
        <div onClick={() => actions.addSynth()}>Add Synth</div>
        {synthElements}
        <div onClick={this.toggleNote}>Beep</div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { appStore } = state

  return {
    appStore: appStore
  }
}

export default connect(select)(App)
