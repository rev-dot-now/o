import { readFile } from 'node:fs/promises'
import { defaultPrompt } from '~/prompts/system'
import type { Message } from '~/state/slices/chat-slice'
import createMessage from '~/utils/create-message'
import getArgs from '~/utils/get-args'

const args = getArgs()

const getInitialMessages = async () => {
	const messages: Message[] = []
	const {
		values: { system, interactive },
		positionals,
	} = args

	if (system) {
		for await (const fileName of system) {
			const content = await readFile(fileName, 'utf-8')
			messages.push(createMessage('system', content))
		}
	} else {
		messages.push(createMessage('system', defaultPrompt))
	}

	if (!interactive) {
		messages.push(createMessage('user', positionals.join(' ')))
	}

	return messages
}

export default getInitialMessages
