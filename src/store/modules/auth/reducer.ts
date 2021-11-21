
import { AuthState, AuthAction } from './types'

const initialState: AuthState = {
  loadingSignIn: false,
  isSignedIn: false,
  token: null,
  error: false
}

function reducer (state = initialState, action: AuthAction): AuthState {
  switch (action.type) {
    case '@auth/SIGN_IN_REQUEST': {
      const newState = { ...state }
      newState.loadingSignIn = true
      return newState
    }

    case '@auth/SIGN_IN_SUCCESS': {
      const newState = { ...state }
      newState.loadingSignIn = false
      newState.isSignedIn = true
      newState.token = action.payload.token
      return newState
    }

    case '@auth/SIGN_IN_FAILURE': {
      const newState = { ...state }
      newState.loadingSignIn = false
      newState.isSignedIn = false
      newState.error = true
      return newState
    }

    default: {
      return state
    }
  }
}

export default reducer
