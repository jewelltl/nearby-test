// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'

import { ConnectedRouter } from 'connected-react-router'
import { Provider } from 'react-redux'
import { store, history } from './store'
import App from './app'

if (document.readyState !== 'loading') {
  initCode()
} else {
  document.addEventListener('DOMContentLoaded', () => {
    initCode()
  })
}

function initCode () {
  ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
    </Provider>,
    document.body.appendChild(document.createElement('div'))
  )
}
