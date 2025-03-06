import { Text } from 'ink'
import { useEffect, useState } from 'react'

export interface CursorProps {
	color: string
	blinkRate?: number
	char?: string
}

const Cursor = ({ color, blinkRate = 500, char = '▒' }: CursorProps) => {
	const [isOn, setIsOn] = useState(false)

	useEffect(() => {
		const interval = setInterval(() => {
			setIsOn(!isOn)
		}, blinkRate)

		return () => clearInterval(interval)
	}, [isOn, blinkRate])

	return isOn ? <Text color={color}>{char}</Text> : null
}

export default Cursor
