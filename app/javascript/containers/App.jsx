import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as appActionCreators from '../actions/appActionCreators'

function select(state) {
  console.log(state)
  return { appStore: state }
}

const App = props => {
  console.log(props)
  const { dispatch, appStore } = props
  const actions = bindActionCreators(appActionCreators, dispatch)

  return (
    <div>
      <div onClick={actions.decrement}>-</div>
      <div>{appStore.counter.currentCounter}</div>
      <div onClick={actions.increment}>+</div>
    </div>
  )
}

export default connect(select)(App)
