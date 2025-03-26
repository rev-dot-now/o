import { readFileSync } from 'node:fs'
import getArgs from '~/utils/get-args'

/**
 * Retrieves the configuration file specified in the command-line arguments.
 *
 * @returns A promise that resolves to the parsed configuration object.
 * @throws Will throw an error if no configuration file is found or if the file
 * cannot be parsed.
 */
const getConfig = () => {
	const {
		values: { config },
	} = getArgs()
	const configFile = readFileSync(config!, 'utf8')

	return configFile ? JSON.parse(configFile) : {}
}

export default getConfig
