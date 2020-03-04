import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as menubarActionCreators from '../actions/menubarActionCreators'

const select = state => {
  return { store: state.menubar }
}

class MenubarContainer extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { dispatch } = this.props
    const actions = bindActionCreators(menubarActionCreators, dispatch)
    actions.setBpm(90)
    actions.startTransport()
  }

  render() {
    const { dispatch } = this.props
    // const actions = bindActionCreators(menubarActionCreators, dispatch)
    const newSynth = menubarActionCreators.newSynth()

    return (
      <div className="MenubarContainer">
        <div onClick={() => newSynth(dispatch)}>Add Synth</div>
      </div>
    )
  }
}

export default connect(select)(MenubarContainer)
