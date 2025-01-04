import { useContext } from 'react'
import AppContext from '~/state/contexts/app-context'

const useAppContext = () => {
	const appContext = useContext(AppContext)

	return appContext
}

export default useAppContext
