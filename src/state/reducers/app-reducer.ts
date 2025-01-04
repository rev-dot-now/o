import { z } from 'zod'
import type { Action } from './types'

export type AppState = object

export const initialAppState: AppState = {}

export type SetAction = Action<'set', { key: string; value: unknown }>

export type Actions = SetAction

const appReducer = (state: AppState, action: Actions): AppState => {
	switch (action.type) {
		case 'set': {
			return {
				...state,
				[action.payload.key]: action.payload.value,
			}
		}
		default: {
			return state
		}
	}
}

export default appReducer
