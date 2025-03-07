import { Text } from 'ink'
import Spinner from 'ink-spinner'
import type { Message } from '~/state/slices/chat-slice'
import getRoleColor from '~/utils/get-role-color'

interface AiResponseProps {
    /**
     * Indicates if the chat is currently loading.
     */
    isLoading: boolean
    /**
     * The array of messages to display.
     */
    messages: Message[]
}

/**
 * ChatLog component that displays messages and a loading spinner.
 * @param {AiResponseProps} props - The properties for the chat log component.
 * @returns {JSX.Element} The rendered chat log component.
 */
const ChatLog = ({ isLoading, messages }: AiResponseProps) => (
    <>
        {messages.map(
            ({ id, role, content }) =>
                role !== 'system' && (
                    <Text key={id} color={getRoleColor(role)}>
                        {role === 'user' && '> '}
                        {content}
                    </Text>
                ),
        )}
        {isLoading && (
            <Text color={getRoleColor('assistant')}>
                <Spinner />
            </Text>
        )}
    </>
)

export default ChatLog
