import { rename } from 'node:fs/promises'
import { tool } from '@langchain/core/tools'
import { z } from 'zod'

export const FileRenameSchema = z.object({
	oldPath: z.string().describe('The path to the file to rename'),
	newPath: z.string().describe('The new path for the file'),
})
export type FileRenameSchema = z.infer<typeof FileRenameSchema>

/**
 * Tool for renaming a file.
 * @param {FileRenameSchema} params - The parameters for the file rename tool.
 * @returns {Promise<string>} A message indicating the result of the renaming.
 */
const toolFileRename = tool(
	async ({ oldPath, newPath }): Promise<string> => {
		await rename(oldPath, newPath)

		return `File ${oldPath} renamed to ${newPath}`
	},
	{
		name: 'fileRename',
		description: 'Rename a file',
		schema: FileRenameSchema,
	},
)

export default toolFileRename
