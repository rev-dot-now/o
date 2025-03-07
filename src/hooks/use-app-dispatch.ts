import { useDispatch } from 'react-redux'
import type { AppDispatch } from '~/state/store'

/**
 * Custom hook to use the typed dispatch function.
 * @returns {AppDispatch} The dispatch function.
 */
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
