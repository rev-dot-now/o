import { Box, Text } from 'ink'
import type TypedError from '~/utils/create-error/custom-error'

interface ConsoleErrorProps {
	/**
	 * The error object to display.
	 */
	error: TypedError
}

/**
 * ConsoleError component that displays error messages.
 * @param {ConsoleErrorProps} props - The properties for the console error component.
 * @returns {JSX.Element} The rendered console error component.
 */
const ConsoleError = ({ error }: ConsoleErrorProps) => {
	return (
		<Box flexDirection='column'>
			<Text bold color='red'>
				Error type: {error.type}
			</Text>
			<Text>{error.message}</Text>
		</Box>
	)
}

export default ConsoleError
