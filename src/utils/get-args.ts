import { parseArgs } from 'node:util'

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
