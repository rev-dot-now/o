import { Provider } from 'react-redux'
import ConsoleError from '~/app/components/console-error'
import Chat from '~/app/components/main/chat'
import ErrorBoundary from '~/app/components/main/error-boundary'
import GenerateResponse from '~/app/components/main/generate-response'
import store from '~/state/store'
import getArgs from '~/utils/get-args'

const Main = () => {
	const {
		values: { interactive },
	} = getArgs()

	return (
		<ErrorBoundary FallbackComponent={ConsoleError}>
			<Provider store={store}>
				{interactive ? <Chat /> : <GenerateResponse />}
			</Provider>
		</ErrorBoundary>
	)
}

export default Main
