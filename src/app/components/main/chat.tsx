import { useCallback, useEffect } from 'react'
import ChatLog from '~/app/components/chat-log'
import Input from '~/app/components/input'
import agent from '~/app/components/main/initializers/agent'
import { useAppDispatch } from '~/hooks/use-app-dispatch'
import { useAppSelector } from '~/hooks/use-app-selector'
import {
	type Message,
	addMessage,
	selectHasInvoked,
	selectIsLoading,
	selectMessages,
	selectUserMessageContent,
	setHasInvoked,
	setIsLoading,
	setUserMessageContent,
} from '~/state/slices/chat-slice'
import store from '~/state/store'
import createMessage from '~/utils/create-message'
import getArgs from '~/utils/get-args'

const THREAD_ID = 0x7e2

/**
 * Chat component that manages user input and displays chat messages.
 * @returns {JSX.Element} The rendered chat component.
 */
const Chat = () => {
	const {
		values: { interactive },
	} = getArgs()
	const messages = useAppSelector(selectMessages)
	const userMessageContent = useAppSelector(selectUserMessageContent)
	const isLoading = useAppSelector(selectIsLoading)
	const dispatch = useAppDispatch()

	/**
	 * Handles changes to the user message input.
	 * @param {string} currentUserMessageContent - The current content of the user message input.
	 */
	const onChange = useCallback(
		(currentUserMessageContent: string) =>
			dispatch(setUserMessageContent(currentUserMessageContent)),
		[dispatch],
	)

	/**
	 * Handles the submission of the user message.
	 * Invokes the agent with the current messages and updates the state accordingly.
	 * @param {string} currentUserMessageContent - The content of the user message to submit.
	 */
	const onSubmit = useCallback(
		async (currentUserMessageContent: string) => {
			dispatch(setIsLoading(true))

			const agentInvokeMessages = [...messages]

			if (selectHasInvoked(store.getState())) {
				const userMessage = createMessage('user', currentUserMessageContent)

				agentInvokeMessages.push(userMessage)

				dispatch(addMessage(userMessage))
				dispatch(setUserMessageContent(''))
			}

			const response = await agent.invoke(
				{ messages: agentInvokeMessages },
				{ configurable: { thread_id: THREAD_ID } },
			)
			const lastResponseMessageContent = response.messages.at(-1)?.content

			if (lastResponseMessageContent) {
				const assistantMessage: Message = createMessage(
					'assistant',
					lastResponseMessageContent as string,
				)
				dispatch(addMessage(assistantMessage))
			}

			dispatch(setHasInvoked(true))
			dispatch(setIsLoading(false))
		},
		[dispatch],
	)

	useEffect(() => {
		onSubmit(userMessageContent)
	}, [])

	return (
		<>
			<ChatLog messages={messages} isLoading={isLoading} />
			{interactive && !isLoading && (
				<Input
					value={userMessageContent}
					onChange={onChange}
					onSubmit={onSubmit}
				/>
			)}
		</>
	)
}

export default Chat
