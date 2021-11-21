
interface SignInRequestData{
  email: string
  password: string
}

export function signRequest ({ email, password }: SignInRequestData) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { email, password }
  }
}
