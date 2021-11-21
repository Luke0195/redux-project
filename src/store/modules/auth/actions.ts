import { action } from 'typesafe-actions'
interface SignInRequestData{
  email: string
  password: string
}

export function signRequest ({ email, password }: SignInRequestData) {
  return action('@auth/SIGN_IN_REQUEST', { email, password })
}

// {
//  type: '@auth/SIGN_IN_REQUEST',
//  payload: { email, password }
// }
