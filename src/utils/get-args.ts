import { parseArgs } from 'node:util'

/**
 * Parses command line arguments.
 * @param {string[]} args - The arguments to parse (default is process.argv).
 * @returns {ReturnType<typeof parseArgs>} The parsed arguments.
 */
const getArgs = (args: string[] = process.argv.slice(2)) =>
    parseArgs({
        args: args,
        options: {
            system: { short: 's', type: 'string', multiple: true },
            interactive: { short: 'i', type: 'boolean' },
        },
        allowPositionals: true,
    })

export default getArgs
