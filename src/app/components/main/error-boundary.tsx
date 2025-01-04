import {
	Component,
	type ErrorInfo,
	type FunctionComponent,
	type ReactNode,
} from 'react'
import type TypedError from '~/utils/create-error/custom-error'

interface ErrorBoundaryProps {
	FallbackComponent: FunctionComponent<{ error: TypedError }>
	children: ReactNode
}

interface ErrorBoundaryState {
	error?: TypedError
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
	constructor(props: ErrorBoundaryProps) {
		super(props)
		this.state = {}
	}

	static getDerivedStateFromError(error: Error) {
		// Update state so the next render will show the fallback UI.
		return { error }
	}

	componentDidCatch(error: Error, _errorInfo: ErrorInfo) {
		// You can also log the error to an error reporting service
		// logErrorToMyService(error, errorInfo)
	}

	render() {
		const { error } = this.state
		const { FallbackComponent } = this.props

		if (error) {
			return <FallbackComponent error={error} />
		}

		return this.props.children
	}
}

export default ErrorBoundary
