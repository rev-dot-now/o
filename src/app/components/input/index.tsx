import { Text, useInput } from 'ink'

type InputProps = {
	onChange: (_: string) => void
	value: string
	onSubmit?: (_: string) => void
}

const Input = ({ value, onChange, onSubmit }: InputProps) => {
	useInput((input, key) => {
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

	return <Text>{value}</Text>
}

export default Input
