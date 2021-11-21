import React from 'react';
import image from './assets/img/redux.jpg'
import './App.css'


export function App(){

  return(
    <div className="container">
      <div className="form-container">
        <img src={image} alt="redux logo"/>
        <form>
          <input type="text" placeholder="Email"/>
          <input type="password" placeholder="Senha"/>
          <button> Entrar</button>
        </form>
      </div>
    </div>
  )
}