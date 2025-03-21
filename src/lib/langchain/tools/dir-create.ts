import { mkdir } from 'node:fs/promises'
import { tool } from '@langchain/core/tools'
import { z } from 'zod'

export const DirCreateSchema = z.object({
	path: z.string().describe('The path to the directory to create'),
})
export type DirCreateSchema = z.infer<typeof DirCreateSchema>

/**
 * Tool for creating a new directory.
 * @param {DirCreateSchema} params - The parameters for the directory create tool.
 * @returns {Promise<string>} A message indicating the result of the creation.
 */
const toolDirCreate = tool(
	async ({ path }): Promise<string> => {
		await mkdir(path, { recursive: true })

		return `Directory ${path} created`
	},
	{
		name: 'dirCreate',
		description: 'Create a new directory',
		schema: DirCreateSchema,
	},
)

export default toolDirCreate
