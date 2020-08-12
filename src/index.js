import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

const updateState = (action) => {
  const actionType =  (action) => {
    switch(action){
      case 'GOOD': return 'GOOD'
      case 'OK': return'OK'
      case 'BAD': return 'BAD'
      default: return 'ZERO'
    }
  }
  store.dispatch({ type: actionType(action) })
}

const App = () => {

  return (
    <div>
      <button onClick={() => updateState('GOOD')}>good</button>
      <button onClick={() => updateState('OK')}>neutral</button>
      <button onClick={() => updateState('BAD')}>bad</button>
      <button onClick={() => updateState('ZERO')}>reset stats</button>
      <div>good {store.getState().good}</div>
      <div>neutral {store.getState().ok}</div>
      <div>bad {store.getState().bad}</div>
    </div>
  )
}

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

renderApp()
store.subscribe(renderApp)
