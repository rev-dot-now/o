import { Text } from 'ink'
import getRoleColor from '~/app/components/chat-log/get-role-color'
import type { Message } from '~/state/slices/chat-slice'

interface AiResponseProps {
	messages: Message[]
}

const ChatLog = ({ messages }: AiResponseProps) =>
	messages.map(
		({ role, content }) =>
			role !== 'system' && (
				<Text key={`${content.slice(0, 10)}`} color={getRoleColor(role)}>
					{content}
				</Text>
			),
	)

export default ChatLog
