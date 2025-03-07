import { Provider } from 'react-redux'
import ConsoleError from '~/app/components/console-error'
import Chat from '~/app/components/main/chat'
import ErrorBoundary from '~/app/components/main/error-boundary'
import store from '~/state/store'

/**
 * Main component that wraps the application in a Redux provider and error boundary.
 * @returns {JSX.Element} The rendered main component.
 */
const Main = () => {
    return (
        <ErrorBoundary FallbackComponent={ConsoleError}>
            <Provider store={store}>
                <Chat />
            </Provider>
        </ErrorBoundary>
    )
}

export default Main
