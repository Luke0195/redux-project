import { takeLatest, call, put, all } from 'redux-saga/effects'
import { ActionType } from 'typesafe-actions'
import api from '../../../services/api/index'

import * as actions from './actions'

export interface ResponseGenerator{
  config?: any
  data?: any
  headers?: any
  request?: any
  status?: number
  statusText?: string

}
export function* signIn ({ payload }: ActionType<typeof actions.signInRequest>) {
  try {
    const { email, password } = payload
    const { data }: ResponseGenerator = yield call(api.post, '', {
      email,
      password
    })
    yield put(actions.signInSucess({ token: data.token }))
  } catch (error) {
    yield put(actions.signInFailure())
  }
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn)
])
// Sempre que formos usar as funções call e put devemos usar yield

// Definições

// call => usamos o call sempre que formos executar uma promise ou um generator  o primeiro parametro é a funcão que queremos executar o segundo e caminho
// put =>  usamos o put para usarmos um dispatch dentro do saga
// takeLastest => vai executar a única requisição
// takeEvery => vai pegar todas as requisições um ótimo cénario seria para chats
