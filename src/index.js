// import ReactDOM from 'react-dom'
// import React, { Component } from 'react'
// import App from './Router'

// ReactDOM.render(<App />, document.getElementById('app'))


import React from 'react'
import ReactDOM from 'react-dom'

import { AppContainer } from 'react-hot-loader'
import App from './Router'


ReactDOM.render(
  <App />,
  document.getElementById('app')
)

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default

    ReactDOM.render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      document.getElementById('app')
    )
  })
}
