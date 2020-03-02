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
    const { dispatch, getState } = this.props
    // const actions = bindActionCreators(appActionCreators, dispatch)
    const test = appActionCreators.setBpm(90)
    console.log(test(dispatch))
  }

  toggleNote() {
    const { appStore } = this.props
    const synth = appStore.synths[0]
    synth.triggerAttackRelease('C4', '1n')
  }

  render() {
    const { dispatch, appStore } = this.props
    console.log(this.props)
    // const actions = bindActionCreators(appActionCreators, dispatch)

    const startTransport = appActionCreators.startTransport()
    const addSynth = appActionCreators.addSynth()
    console.log(this.props)

    let synthElements = []

    appStore.synths.map((synth, i) => {
      synthElements.push(
        <ToneSynth
          synth="synth"
          instrument={synth.instrument}
          changeSynthValue={(name, property, value) => {
            // const changeSynthValue = appActionCreators.changeSynthValue(
            //   name,
            //   property,
            //   value
            // )
            // changeSynthValue(dispatch)
            appActionCreators.changeSynthValue(name, property, value)(
              dispatch,
              appStore
            )
          }}
          key={i}
        />
      )
    })

    return (
      <div>
        <div onClick={() => startTransport(dispatch)}>Start</div>
        <div onClick={() => addSynth(dispatch)}>Add Synth</div>
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
