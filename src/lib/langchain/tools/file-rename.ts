import { tool } from '@langchain/core/tools'
import { rename } from 'node:fs/promises'
import { z } from 'zod'

export const FileRenameSchema = z.object({
	oldPath: z.string().describe('The path to the file to rename'),
	newPath: z.string().describe('The new path for the file'),
})
export type FileRenameSchema = z.infer<typeof FileRenameSchema>

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
