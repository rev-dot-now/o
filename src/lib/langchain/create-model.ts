import { ChatAnthropic } from '@langchain/anthropic'
import { ChatBedrockConverse } from '@langchain/aws'
import { ChatCerebras } from '@langchain/cerebras'
import { ChatCohere } from '@langchain/cohere'
import { ChatDeepSeek } from '@langchain/deepseek'
import { ChatGoogleGenerativeAI } from '@langchain/google-genai'
import { ChatGroq } from '@langchain/groq'
import { ChatMistralAI } from '@langchain/mistralai'
import { ChatOllama } from '@langchain/ollama'
import { ChatOpenAI } from '@langchain/openai'
import { ChatXAI } from '@langchain/xai'
import getArgs from '~/utils/get-args'
import getConfig from '~/utils/get-config'

/**
 * Function to create a model with parameters from config file.
 * @returns {ChatAnthropic|ChatOpenAI|ChatGroq} The created model.
 */
const createModel = () => {
	const {
		values: { llm },
	} = getArgs()
	const config = getConfig()

	switch (llm) {
		case 'anthropic': {
			return new ChatAnthropic(config)
		}
		case 'aws': {
			return new ChatBedrockConverse(config)
		}
		case 'cerebras': {
			return new ChatCerebras(config)
		}
		case 'cohere': {
			return new ChatCohere(config)
		}
		case 'deepseek': {
			return new ChatDeepSeek(config)
		}
		case 'googlegenai': {
			return new ChatGoogleGenerativeAI(config)
		}
		case 'groq': {
			return new ChatGroq(config)
		}
		case 'mistralai': {
			return new ChatMistralAI(config)
		}
		case 'ollama': {
			return new ChatOllama(config)
		}
		case 'openai': {
			return new ChatOpenAI(config)
		}
		case 'xai': {
			return new ChatXAI(config)
		}
		case undefined: {
			throw new Error('No model detected.')
		}
		default: {
			throw new Error('Unsupported model detected.')
		}
	}
}

export default createModel
