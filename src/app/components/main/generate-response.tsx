import type { BaseMessageLike } from '@langchain/core/messages'
import { Text } from 'ink'
import { useEffect, useState } from 'react'
import agent from '~/app/components/main/initializers/agent'
import { useAppSelector } from '~/hooks/use-app-selector'
import { selectMessages } from '~/state/slices/chat-slice'

interface AiResponseProps {
	messages: BaseMessageLike[]
}

const GenerateResponse = () => {
	const [responseMessage, setResponseMessage] = useState('')
	const messages = useAppSelector(selectMessages)

	useEffect(() => {
		const processResponse = async () => {
			const response = await agent.invoke(
				{ messages: messages },
				{ configurable: { thread_id: 0x42 } },
			)

			const mostRecentMessageContent =
				response.messages[response.messages.length - 1].content

			if (typeof mostRecentMessageContent === 'string') {
				setResponseMessage(mostRecentMessageContent)
			}
		}

		processResponse()
	}, [messages])

	return <Text>{responseMessage}</Text>
}

export default GenerateResponse
