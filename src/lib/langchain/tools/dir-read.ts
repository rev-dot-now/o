import { readdir } from 'node:fs/promises'
import { tool } from '@langchain/core/tools'
import { z } from 'zod'

export const DirReadSchema = z.object({
	path: z.string().describe('The path to the directory to read'),
})
export type DirReadSchema = z.infer<typeof DirReadSchema>

/**
 * Tool for reading the contents of a directory.
 * @param {DirReadSchema} params - The parameters for the directory read tool.
 * @returns {Promise<string[]>} An array of file names in the directory.
 */
const toolFileList = tool(
	async ({ path = process.cwd() }): Promise<string[]> => {
		const files = await readdir(path)

		return files
	},
	{
		name: 'dirRead',
		description: 'Read the contents of a directory',
		schema: DirReadSchema,
	},
)

export default toolFileList
