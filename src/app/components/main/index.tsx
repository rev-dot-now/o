import AiResponse from '../ai-response'
import AppProvider from './content-provider'
import getArgs from '~/utils/get-args'

const App = () => {
	const { values } = getArgs()

	return (
		<AppProvider>
			{values.message && <AiResponse messages={[['user', values.message]]} />}
		</AppProvider>
	)
}

export default App
