import { useCallback, useEffect, useState } from 'react'
import ChatLog from '~/app/components/chat-log'
import Input from '~/app/components/input'
import agent from '~/app/components/main/initializers/agent'
import { useAppDispatch } from '~/hooks/use-app-dispatch'
import { useAppSelector } from '~/hooks/use-app-selector'
import {
	type Message,
	addMessage,
	selectMessages,
} from '~/state/slices/chat-slice'
import createMessage from '~/utils/create-message'

const Chat = () => {
	const [userMessageContent, setUserMessageContent] = useState('')
	const messages = useAppSelector(selectMessages)
	const dispatch = useAppDispatch()

	const onSubmit = useCallback(
		async (currentUserMessageContent: string) => {
			const userMessage: Message = createMessage(
				'user',
				currentUserMessageContent,
			)
			dispatch(addMessage(userMessage))
			setUserMessageContent('')

			const response = await agent.invoke(
				{ messages: [...messages, userMessage] },
				{ configurable: { thread_id: 0x42 } },
			)

			const lastResponseMessageContent = response.messages.at(-1)?.content

			if (lastResponseMessageContent) {
				const assistantMessage: Message = createMessage(
					'assistant',
					lastResponseMessageContent as string,
				)
				dispatch(addMessage(assistantMessage))
			}
		},
		[dispatch, messages],
	)

	return (
		<>
			<ChatLog messages={messages} />
			<Input
				value={userMessageContent}
				onChange={setUserMessageContent}
				onSubmit={onSubmit}
			/>
		</>
	)
}

export default Chat
