import type { BaseMessageLike } from '@langchain/core/messages'
import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import type { RootState } from '~/state/store'
import getInitialState from '~/utils/get-initial-state'

export type Message = BaseMessageLike & {
	id: string
	role: string
	content: string
}

export type AppState = {
	userMessageContent: string
	messages: Message[]
	isLoading: boolean
	hasInvoked: boolean
}

/**
 * Initial state for the chat slice, loading initial messages.
 * This state is retrieved asynchronously from the getInitialState function.
 */
export const initialState: AppState = await getInitialState()

const chatSlice = createSlice({
	name: 'chat',
	initialState,
	reducers: {
		/**
		 * Adds a message to the chat.
		 * @param {AppState} state - The current state.
		 * @param {Message} action - The message to add.
		 */
		addMessage: (state, action: PayloadAction<Message>) => {
			state.messages.push(action.payload)
		},
		setUserMessageContent: (state, action: PayloadAction<string>) => {
			state.userMessageContent = action.payload
		},
		setIsLoading: (state, action: PayloadAction<boolean>) => {
			state.isLoading = action.payload
		},
		setHasInvoked: (state, action: PayloadAction<boolean>) => {
			state.hasInvoked = action.payload
		},
	},
})

const selectChatSlice = (state: RootState) => state.chatSlice

/**
 * Selects all messages from the chat slice.
 * @param {RootState} state - The application state.
 * @returns {Message[]} The array of messages.
 */
export const selectMessages = (state: RootState) =>
	selectChatSlice(state).messages

/**
 * Selects the last message from the chat slice.
 * @param {RootState} state - The application state.
 * @returns {Message | undefined} The last message or undefined if none.
 */
export const selectLastMessage = (state: RootState) =>
	selectMessages(state).at(-1)

/**
 * Selects the loading state from the chat slice.
 * @param {RootState} state - The application state.
 * @returns {boolean} The loading state of the agent.
 */
export const selectIsLoading = (state: RootState) =>
	selectChatSlice(state).isLoading

/**
 * Selects the user message content from the chat slice.
 * @param {RootState} state - The application state.
 * @returns {boolean} The loading state of the agent.
 */
export const selectUserMessageContent = (state: RootState) =>
	selectChatSlice(state).userMessageContent

/**
 * Select whether the agent has been invoked at least once.
 * @param {RootState} state - The application state.
 * @returns {boolean} Whether the agent has been invoked at least once.
 */
export const selectHasInvoked = (state: RootState) =>
	selectChatSlice(state).hasInvoked

export const {
	addMessage,
	setUserMessageContent,
	setIsLoading,
	setHasInvoked,
} = chatSlice.actions

export default chatSlice.reducer
