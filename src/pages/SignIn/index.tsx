import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { StoreState } from '../../store/createStore'
import * as actions from '../../store/modules/auth/actions'
import image from '../../assets/img/redux.jpg'
import './styles.css'

export function SignIn () {
  const dispatch = useDispatch()
  const { loadingSignIn, error, isSignedIn } = useSelector((state: StoreState) => state.auth)
  console.log('LOADING SIGNED IN:', loadingSignIn)
  console.log('Error', error)
  console.log('isSignedIn', isSignedIn)

  return (
    <div className="form-container">
    <img src={image} alt="redux logo"/>
    <div className="form">
      <input type="text" placeholder="Email" defaultValue="lucas@1273@gmail.com"/>
      <input type="password" placeholder="Senha" defaultValue="213"/>
      <button onClick={() => dispatch(actions.signInRequest({ email: 'lucas@1273@gmail.com', password: '213' }))}> {loadingSignIn ? 'Carregando' : 'Entrar'}</button>
    </div>
  </div>
  )
}
