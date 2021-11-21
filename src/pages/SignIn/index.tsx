import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { StoreState } from '../../store/createStore'
import image from '../../assets/img/redux.jpg'
import './styles.css'

export function SignIn () {
  return (
    <div className="form-container">
    <img src={image} alt="redux logo"/>
    <form>
      <input type="text" placeholder="Email"/>
      <input type="password" placeholder="Senha"/>
      <button> Entrar</button>
    </form>
  </div>
  )
}
