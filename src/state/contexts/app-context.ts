import { createContext, type Dispatch } from 'react'
import {
	type Actions,
	initialAppState,
	type AppState,
} from '../reducers/app-reducer'
import type {
	CompiledStateGraph,
	MessagesAnnotation,
	START,
} from '@langchain/langgraph'

export interface AppContext {
	state: AppState
	dispatch: Dispatch<Actions>
	agent: CompiledStateGraph<
		(typeof MessagesAnnotation)['State'],
		(typeof MessagesAnnotation)['Update'],
		typeof START | 'agent' | 'tools'
	>
}

export const initialAppContext: AppContext = {
	state: initialAppState,
	dispatch: () => {
		/* no-op */
	},
	agent: {} as AppContext['agent'],
}

const AppContext = createContext(initialAppContext)

export default AppContext
