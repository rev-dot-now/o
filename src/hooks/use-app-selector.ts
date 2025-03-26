import { useSelector } from 'react-redux'
import type { RootState } from '~/state/store'

/**
 * Custom hook to use the typed selector function.
 * @returns {RootState} The selected state.
 */
export const useAppSelector = useSelector.withTypes<RootState>()
