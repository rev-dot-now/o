import { Box, type Key, Text, useInput } from 'ink'
import Cursor from '~/app/components/cursor'
import getRoleColor from '~/utils/get-role-color'

type InputProps = {
	onChange: (_: string) => void
	value: string
	onSubmit?: (_: string) => void
	onInput?: (_: string, key: Key) => void
}

const Input = ({ value, onChange, onSubmit, onInput }: InputProps) => {
	useInput((input, key) => {
		if (onInput) onInput(input, key)

		if (key.backspace || key.delete) {
			onChange(value.slice(0, -1))
		} else if (key.return) {
			if (onSubmit) {
				onSubmit(value)
			}
			onChange('')
		} else {
			onChange(value + input)
		}
	})

	return (
		<Box>
			<Text color={getRoleColor('user')}>{'> '}</Text>
			<Text>
				{value}
				<Cursor color='white' />
			</Text>
		</Box>
	)
}

export default Input
