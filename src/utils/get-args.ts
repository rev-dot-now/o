import { parseArgs } from 'node:util'

const getArgs = (args: string[] = process.argv.slice(2)) =>
	parseArgs({
		args: args,
		options: {
			message: { type: 'string', short: 'm' },
			role: { type: 'string', default: 'system', short: 'r' },
			model: { type: 'string' },
			temp: { type: 'string' }
		},
	})

export default getArgs
