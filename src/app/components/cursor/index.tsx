import { Text } from 'ink'
import { useEffect, useState } from 'react'

export interface CursorProps {
    /**
     * The color of the cursor.
     */
    color: string
    /**
     * The blink rate of the cursor in milliseconds.
     * @default 500
     */
    blinkRate?: number
    /**
     * The character to represent the cursor.
     * @default '\u2592'
     */
    char?: string
}

/**
 * Cursor component that blinks to indicate input position.
 * @param {CursorProps} props - The properties for the cursor.
 * @returns {JSX.Element | null} The rendered cursor or null if not visible.
 */
const Cursor = ({ color, blinkRate = 500, char = '\u2592' }: CursorProps) => {
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
