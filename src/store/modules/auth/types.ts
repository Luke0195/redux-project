import { ActionType } from 'typesafe-actions'
import * as actions from './actions'

export type AuthAction = ActionType<typeof actions>

export interface AuthState {
  readonly loadignSignIn: boolean
  readonly isSignedIn: boolean
}
