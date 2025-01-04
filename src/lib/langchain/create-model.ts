import { ChatOpenAI } from '@langchain/openai'
import { OPENAI_DEFAULT_MODEL, OPENAI_DEFAULT_TEMPERATURE } from './constants'

const createModel = (
	model: string = OPENAI_DEFAULT_MODEL,
	temperature: number = OPENAI_DEFAULT_TEMPERATURE,
) =>
	new ChatOpenAI({
		model,
		temperature,
		// verbose: true,
	})

export default createModel
