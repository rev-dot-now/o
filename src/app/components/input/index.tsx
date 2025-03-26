import { Box, type Key, Text, useInput } from 'ink'
import Cursor from '~/app/components/cursor'
import getRoleColor from '~/utils/get-role-color'

type InputProps = {
	/**
	 * Function to call when the input value changes.
	 */
	onChange: (_: string) => void
	/**
	 * The current value of the input.
	 */
	value: string
	/**
	 * Function to call when the input is submitted.
	 */
	onSubmit?: (_: string) => void
	/**
	 * Function to call on input change with key information.
	 */
	onInput?: (_: string, key: Key) => void
}

/**
 * Input component that captures user input and displays a cursor.
 * @param {InputProps} props - The properties for the input component.
 * @returns {JSX.Element} The rendered input component.
 */
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
