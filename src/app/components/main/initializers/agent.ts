import { SystemMessage } from '@langchain/core/messages'
import { MemorySaver } from '@langchain/langgraph'
import { createReactAgent } from '@langchain/langgraph/prebuilt'
import createModel from '~/lib/langchain/create-model'
import tools from '~/lib/langchain/tools'

const agent = createReactAgent({
	llm: createModel(),
	tools,
	checkpointSaver: new MemorySaver(),
	stateModifier: async (state) => {
		const messagesLength = state.messages.length
		const lastMessage = state.messages[messagesLength - 1]
		const type = lastMessage.getType()

		if (type === 'tool' && lastMessage.name === 'fileRead') {
			try {
				const { content, role } = JSON.parse(lastMessage.content as string)

				switch (role) {
					case 'system':
						state.messages.push(new SystemMessage(content))
						break
				}
			} catch (err) {}
		}

		return state.messages
	},
})

export default agent
