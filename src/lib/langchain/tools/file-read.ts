import { tool } from '@langchain/core/tools'
import { readFile } from 'node:fs/promises'
import { z } from 'zod'

export const FileReadSchema = z.object({
    path: z.string().describe('The path to the file to read'),
    role: z
        .enum(['system', 'user', 'assistant', 'tool'])
        .default('tool')
        .describe('The role to use when reading the file content')
        .optional(),
})
export type FileReadSchema = z.infer<typeof FileReadSchema>

/**
 * Tool for reading a file.
 * @param {FileReadSchema} params - The parameters for the file read tool.
 * @returns {Promise<string>} The content of the file or a JSON string with role and content.
 */
const toolFileRead = tool(
    async ({ path, role }): Promise<string> => {
        const content = await readFile(path, { encoding: 'utf8' })

        return role ? JSON.stringify({ role, content }) : content
    },
    {
        name: 'fileRead',
        description: 'Read a file',
        schema: FileReadSchema,
    },
)

export default toolFileRead
