import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { SignIn } from './pages/SignIn'
import { store, persistor } from './store/index'
import './App.css'

export function App () {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <div className="container">
          <SignIn />
        </div>
      </PersistGate>
    </Provider>
  )
}
