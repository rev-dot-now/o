import { configureStore } from '@reduxjs/toolkit'
import chatSlice from '~/state/slices/chat-slice'

/**
 * Configures the Redux store with the chat slice.
 * @returns {import('@reduxjs/toolkit').Store} The configured store.
 */
const store = configureStore({
    reducer: {
        chatSlice,
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store
