
import { ActionType } from 'typesafe-actions'
import * as actions from './actions'

export type AuthAction = ActionType<typeof actions>

export interface AuthState {
  readonly loadingSignIn: boolean
  readonly isSignedIn: boolean
  readonly token: string | null
  readonly error: boolean
}
