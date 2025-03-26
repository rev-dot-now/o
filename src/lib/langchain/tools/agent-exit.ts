import { tool } from '@langchain/core/tools'
import { z } from 'zod'

export const AgentExitSchema = z.object({
	message: z
		.string()
		.describe('Optional message to log before exiting.')
		.optional(),
	error: z
		.string()
		.describe('Optional error to log before exiting.')
		.optional(),
})
export type AgentExitSchema = z.infer<typeof AgentExitSchema>

/**
 * Tool for exiting an interactive agent.
 * @param {AgentExitSchema} params - The parameters to the agent exit tool.
 */
const toolAgentExit = tool(
	async ({ message, error }) => {
		if (message) console.log(message)
		if (error) console.error(error)

		process.exit(error ? 1 : 0)
	},
	{
		name: 'agentExit',
		description: 'Exit an interactive agent session',
		schema: AgentExitSchema,
	},
)

export default toolAgentExit
