import { action } from 'typesafe-actions'
interface SignInRequestData{
  email: string
  password: string
}

interface SignInSucessData{
  token: string
}

export function signInRequest ({ email, password }: SignInRequestData) {
  return action('@auth/SIGN_IN_REQUEST', { email, password })
}

export function signInSucess ({ token }: SignInSucessData) {
  return action('@auth/SIGN_IN_SUCCESS', { token })
}

export function signInFailure () {
  return action('@auth/SIGN_IN_FAILURE')
}
