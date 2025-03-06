import { useSelector } from 'react-redux'
import type { RootState } from '~/state/store'

export const useAppSelector = useSelector.withTypes<RootState>()
