import { tool } from '@langchain/core/tools'
import { readdir } from 'node:fs/promises'
import { z } from 'zod'

export const DirReadSchema = z.object({
	path: z.string().describe('The path to the directory to read'),
})
export type DirReadSchema = z.infer<typeof DirReadSchema>

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
