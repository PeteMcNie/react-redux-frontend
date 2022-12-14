import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { store } from './app/store'
import { Provider } from 'react-redux'

import App from './components/App'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
)
