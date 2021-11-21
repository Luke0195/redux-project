
const initialState = {
  loadignSignIn: false,
  isSignedIn: false
}

function reducer (state = initialState, action: any) {
  switch (action.type) {
    case '@auth/SIGN_IN_REQUEST': {
      const newState = { ...state }
      newState.loadignSignIn = true
      return newState
    }

    default: {
      return state
    }
  }
}

export default reducer
