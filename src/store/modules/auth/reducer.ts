
import { AuthState, AuthAction } from './types'

const initialState: AuthState = {
  loadingSignIn: false,
  isSignedIn: false,
  token: null
}

function reducer (state = initialState, action: AuthAction): AuthState {
  switch (action.type) {
    case '@auth/SIGN_IN_REQUEST': {
      const newState = { ...state }
      newState.loadingSignIn = true
      return newState
    }

    default: {
      return state
    }
  }
}

export default reducer
