// Run this example by adding <%= javascript_pack_tag 'hello_redux' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import configureStore from '../store/configureStore'

import App from '../containers/App'

const store = configureStore()

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  )
})
