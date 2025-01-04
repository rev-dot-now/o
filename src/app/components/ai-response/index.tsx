import { Text } from 'ink'
import { useEffect, useState } from 'react'
import useModel from '~/hooks/use-model'
import type { BaseMessageLike } from '@langchain/core/messages'
import useAppContext from '~/hooks/use-app-context'

interface AiResponseProps {
	messages: BaseMessageLike[]
}

const AiResponse = ({ messages }: AiResponseProps) => {
	const { agent } = useAppContext()
	const model = useModel()
	const [responseMessage, setResponseMessage] = useState('')

	useEffect(() => {
		const processResponse = async () => {
			const response = await agent.invoke(
				{ messages: messages },
				{ configurable: { thread_id: 0xbead } },
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

export default AiResponse
