import { stat } from 'node:fs/promises'
import { tool } from '@langchain/core/tools'
import { z } from 'zod'

export const FileInfoSchema = z.object({
	path: z.string().describe('The path to the file to get information about'),
})
export type FileInfoSchema = z.infer<typeof FileInfoSchema>

/**
 * Tool for getting information about a file.
 * @param {FileInfoSchema} params - The parameters for the file info tool.
 * @returns {Promise<{ size: number; modifiedTime: Date }>} The size and modified time of the file.
 */
const toolFileInfo = tool(
	async ({ path }): Promise<{ size: number; modifiedTime: Date }> => {
		const fileStats = await stat(path)
		return {
			size: fileStats.size,
			modifiedTime: fileStats.mtime,
		}
	},
	{
		name: 'fileInfo',
		description: 'Get information about a file',
		schema: FileInfoSchema,
	},
)

export default toolFileInfo
