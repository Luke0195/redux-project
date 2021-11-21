import React from 'react'
import { Provider } from 'react-redux'
import { SignIn } from './pages/SignIn'
import { store } from './store/index'
import './App.css'

export function App () {
  return (
    <Provider store={store}>
    <div className="container">
      <SignIn />
    </div>
    </Provider>
  )
}
