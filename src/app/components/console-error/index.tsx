import { Box, Text } from 'ink'
import type TypedError from '~/utils/create-error/custom-error'

interface ConsoleErrorProps {
	error: TypedError
}

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
