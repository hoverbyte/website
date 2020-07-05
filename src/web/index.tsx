import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { setupPage, normalize } from 'csstips'

normalize()
setupPage('#root')

import { App } from './App'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)
