import { tool } from '@langchain/core/tools'
import { writeFile } from 'node:fs/promises'
import { z } from 'zod'

export const FileWriteSchema = z.object({
    path: z.string().describe('The path to the file to write'),
    content: z.string().describe('The content to write to the file'),
    isAppend: z.boolean().optional(),
})
export type FileWriteSchema = z.infer<typeof FileWriteSchema>

/**
 * Tool for writing to a file.
 * @param {FileWriteSchema} params - The parameters for the file write tool.
 * @returns {Promise<string>} A message indicating the result of the write operation.
 */
const toolFileWrite = tool(
    async ({
        path = process.cwd(),
        content,
        isAppend = false,
    }): Promise<string> => {
        await writeFile(path, content, {
            encoding: 'utf8',
            flag: isAppend ? 'a' : 'w',
        })

        return `File ${path} written to`
    },
    {
        name: 'fileWrite',
        description: 'Write a file',
        schema: FileWriteSchema,
    },
)

export default toolFileWrite
