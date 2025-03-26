import { MemorySaver } from '@langchain/langgraph'
import { createReactAgent } from '@langchain/langgraph/prebuilt'
import createModel from '~/lib/langchain/create-model'
import tools from '~/lib/langchain/tools'

const agent = createReactAgent({
	llm: createModel(),
	tools,
	checkpointSaver: new MemorySaver(),
})

export default agent
