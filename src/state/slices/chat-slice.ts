import type { BaseMessageLike } from '@langchain/core/messages'
import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '~/state/store'
import getInitialMessages from '~/utils/get-initial-messages'

export type Message = BaseMessageLike & {
	id: string
	role: string
	content: string
}

export type AppState = {
	messages: Message[]
}

export const initialState: AppState = {
	messages: await getInitialMessages(),
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
