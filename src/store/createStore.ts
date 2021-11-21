import { applyMiddleware, createStore, Reducer, Middleware } from 'redux'
import { AuthState, AuthAction } from './modules/auth/types'

// O Store State disponibiliza todo o estado da aplicação em um único ponto

export interface StoreState{
  auth: AuthState
}
// AuthAction | AuthAction // se precisamos de mais algumas actions adicionamos |
export type StoreAction = AuthAction

export default (reducers: Reducer<StoreState, StoreAction>, middlewares: Middleware[]) => {
  const enhancer = applyMiddleware(...middlewares)
  return createStore(reducers, enhancer)
}
