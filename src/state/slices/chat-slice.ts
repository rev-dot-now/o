import type { BaseMessageLike } from '@langchain/core/messages'
import { createSlice } from '@reduxjs/toolkit'
import { rootPrompt } from '~/prompts/system'

import type { RootState } from '~/state/store'

export type Message = BaseMessageLike & [string, string]

export type AppState = {
	messages: Message[]
}

export const initialState: AppState = {
	messages: [['system', rootPrompt]],
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

export const { addMessage } = chatSlice.actions

export default chatSlice.reducer
