
import { all } from 'redux-saga/effects'
import auth from './auth/sagas'

// Se estivermos trabalhanmos com várias sagas deveriamos usar [auth,teste, x, y]
export default function* rootSaga (): any {
  return yield all([auth])
}
