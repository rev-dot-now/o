import { readFile } from 'node:fs/promises'
import { defaultPrompt } from '~/prompts/system'
import type { Message } from '~/state/slices/chat-slice'
import createMessage from '~/utils/create-message'
import getArgs from '~/utils/get-args'

const args = getArgs()

const getInitialMessages = async () => {
	const messages: Message[] = []
	const {
		values: { system },
		positionals,
	} = args

	if (system) {
		return await Promise.all(
			system.map(async (fileName) => {
				const content = await readFile(fileName, 'utf-8')
				return createMessage('system', content)
			}),
		)
	} else {
		return [createMessage('system', defaultPrompt)]
	}
}

export default getInitialMessages
