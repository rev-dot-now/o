import { Text } from 'ink'
import Spinner from 'ink-spinner'
import type { Message } from '~/state/slices/chat-slice'
import getRoleColor from '~/utils/get-role-color'

interface AiResponseProps {
	isLoading: boolean
	messages: Message[]
}

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
