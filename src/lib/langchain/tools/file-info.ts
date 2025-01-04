import { tool } from '@langchain/core/tools'
import { stat } from 'node:fs/promises'
import { z } from 'zod'

export const FileInfoSchema = z.object({
	path: z.string().describe('The path to the file to get information about'),
})
export type FileInfoSchema = z.infer<typeof FileInfoSchema>

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
