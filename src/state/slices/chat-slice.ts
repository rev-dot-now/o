import type { BaseMessageLike } from '@langchain/core/messages'
import { createSlice } from '@reduxjs/toolkit'
import { defaultPrompt } from '~/prompts/system'

import type { RootState } from '~/state/store'
import createMessage from '~/utils/create-message'

export type Message = BaseMessageLike & { role: string; content: string }

export type AppState = {
	messages: Message[]
}

export const initialState: AppState = {
	messages: [
		createMessage('system', process.env.O_ROOT_PROMPT ?? defaultPrompt),
	],
}

const chatSlice = createSlice({
	name: 'chat',
	initialState,
	reducers: {
		addMessage: (state, action) => {
			state.messages.push(action.payload)
		},
	},
})

const selectChatSlice = (state: RootState) => state.chatSlice

export const selectMessages = (state: RootState) =>
	selectChatSlice(state).messages

export const selectLastMessage = (state: RootState) =>
	selectMessages(state).at(-1)

export const { addMessage } = chatSlice.actions

export default chatSlice.reducer
