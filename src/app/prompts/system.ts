import { ChatPromptTemplate } from '@langchain/core/prompts'

export const rootTemplate = ChatPromptTemplate.fromMessages([
	['system', 'This is an AI agent powered CLI tool called K-Ink'],
	['placeholder', '{messages}'],
])
