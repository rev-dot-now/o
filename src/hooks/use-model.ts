import { useMemo } from 'react'
import createModel from '~/lib/langchain/create-model'
import getArgs from '~/utils/get-args'

const useModel = () => {
	const args = getArgs()

	return useMemo(
		() =>
			createModel(args.values.model, Number.parseFloat(args.values.temp ?? '')),
		[args.values.model, args.values.temp],
	)
}

export default useModel
