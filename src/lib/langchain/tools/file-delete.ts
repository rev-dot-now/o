import { tool } from '@langchain/core/tools'
import { unlink } from 'node:fs/promises'
import { z } from 'zod'

export const FileDeleteSchema = z.object({
    path: z.string().default(process.cwd()).describe('The path to the file to delete'),
})
export type FileDeleteSchema = z.infer<typeof FileDeleteSchema>

/**
 * Tool for deleting a file.
 * @param {FileDeleteSchema} params - The parameters for the file delete tool.
 * @returns {Promise<string>} A message indicating the result of the deletion.
 */
const toolFileDelete = tool(
    async ({ path }): Promise<string> => {
        await unlink(path)

        return `File ${path} deleted`
    },
    {
        name: 'fileDelete',
        description: 'Delete a file',
        schema: FileDeleteSchema,
    },
)

export default toolFileDelete
