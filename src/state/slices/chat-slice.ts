import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '~/state/store'
import getInitialMessages from '~/utils/get-initial-messages'
import type { BaseMessageLike } from '@langchain/core/messages'

export type Message = BaseMessageLike & {
    id: string
    role: string
    content: string
}

export type AppState = {
    messages: Message[]
}

/**
 * Initial state for the chat slice, loading initial messages.
 */
export const initialState: AppState = {
    messages: await getInitialMessages(),
}

const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        /**
         * Adds a message to the chat.
         * @param {AppState} state - The current state.
         * @param {Message} action - The message to add.
         */
        addMessage: (state, action) => {
            state.messages.push(action.payload)
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

export const { addMessage } = chatSlice.actions

export default chatSlice.reducer
