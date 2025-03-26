import { rmdir } from 'node:fs/promises'
import { tool } from '@langchain/core/tools'
import { z } from 'zod'

export const DirDeleteSchema = z.object({
	path: z.string().describe('The path to the directory to delete'),
	isRecursive: z
		.boolean()
		.optional()
		.describe('Whether to delete the directory recursively'),
})
export type DirDeleteSchema = z.infer<typeof DirDeleteSchema>

/**
 * Tool for deleting a directory.
 * @param {DirDeleteSchema} params - The parameters for the directory delete tool.
 * @returns {Promise<string>} A message indicating the result of the deletion.
 */
const toolDirDelete = tool(
	async ({ path = process.cwd(), isRecursive = false }): Promise<string> => {
		await rmdir(path, { recursive: isRecursive })

		return `Directory ${path} deleted`
	},
	{
		name: 'dirDelete',
		description: 'Delete a directory (optionally recursively)',
		schema: DirDeleteSchema,
	},
)

export default toolDirDelete
