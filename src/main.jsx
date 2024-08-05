import React from 'react'
import ReactDOM from 'react-dom/client'
import { createStore } from 'redux'
import App from './App.jsx'

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT': {
      return state + 1
    }
    case 'DECREMENT': {
      return state - 1
    }
    case 'ZERO': {
      return 0
    }
    default: {
      return state
    }
  }
}

const store = createStore(counterReducer)

const root = ReactDOM.createRoot(document.getElementById('root'))
const render = () =>
  root.render(
    <React.StrictMode>
      <App store={store} />
    </React.StrictMode>,
  )

render()
store.subscribe(render)
