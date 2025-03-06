import { exec } from 'node:child_process'
import { promisify } from 'node:util'
import { tool } from '@langchain/core/tools'
import { z } from 'zod'

const execPromise = promisify(exec)

export const CommandExecSchema = z.object({
	command: z.string().describe('The command to execute in the CLI'),
})
export type CommandExecSchema = z.infer<typeof CommandExecSchema>

const toolCommandExec = tool(
	async ({ command }): Promise<string> => {
		const { stdout, stderr } = await execPromise(command)
		if (stderr) {
			throw new Error(stderr)
		}
		return stdout
	},
	{
		name: 'commandExec',
		description: 'Execute a command in the CLI',
		schema: CommandExecSchema,
	},
)

export default toolCommandExec
