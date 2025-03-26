import { parseArgs } from 'node:util'

const DEFAULT_O_CONFIG = './config.json'

/**
 * Parses command line arguments.
 * @param {string[]} args - The arguments to parse (default is process.argv).
 * @returns {ReturnType<typeof parseArgs>} The parsed arguments.
 */
const getArgs = (args: string[] = process.argv.slice(2)) => {
	return parseArgs({
		args: args,
		options: {
			config: {
				short: 'c',
				type: 'string',
				default: process.env.O_CONFIG ?? DEFAULT_O_CONFIG,
			},
			interactive: { short: 'i', type: 'boolean', default: false },
			llm: {
				short: 'l',
				type: 'string',
				default: process.env.O_LLM,
			},
			system: { short: 's', type: 'string', multiple: true },
		},
		allowPositionals: true,
	})
}

export default getArgs
