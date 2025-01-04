import { useReducer } from 'react'
import AppContext from '~/state/contexts/app-context'
import appReducer, { initialAppState } from '~/state/reducers/app-reducer'
import ErrorBoundary from './error-boundary'
import ConsoleError from '../console-error'
import initReactAgent from '~/app/components/main/initializers/init-react-agent'

interface AppProviderProps {
	children: React.ReactNode
}

const AppProvider = ({ children }: AppProviderProps) => {
	const [state, dispatch] = useReducer(appReducer, initialAppState)
	const agent = initReactAgent()

	return (
		<ErrorBoundary FallbackComponent={ConsoleError}>
			<AppContext.Provider value={{ state, dispatch, agent }}>
				{children}
			</AppContext.Provider>
		</ErrorBoundary>
	)
}

export default AppProvider
