import {
	defaultInstructions,
	defaultPrompt,
	templateInstructions,
} from '~/prompts/system'
import type { Message } from '~/state/slices/chat-slice'
import createMessage from '~/utils/create-message'
import getArgs from '~/utils/get-args'
import getVariableNames from '~/utils/get-variable-names'
import hasVariables from '~/utils/has-variables'
import interpolate from '~/utils/interpolate'

const args = getArgs()

/**
 * Retrieves the initial messages for the chat.
 * @returns {Promise<Message[]>} A promise that resolves to an array of initial messages.
 */
const getInitialMessages = async () => {
	const messages: Message[] = []
	const {
		values: { system, interactive },
		positionals,
	} = args

	if (system) {
		for await (const fileName of system) {
			const file = Bun.file(fileName)
			const content = await file.text()

			if (hasVariables(content)) {
				messages.push(
					createMessage(
						'system',
						interpolate(defaultPrompt, {
							instructions: interpolate(templateInstructions, {
								template: content.trim(),
								variables: getVariableNames(content).join(', '),
							}),
						}),
					),
				)
			} else {
				messages.push(
					createMessage(
						'system',
						interpolate(defaultPrompt, {
							instructions: content,
						} as const),
					),
				)
			}
		}
	} else {
		messages.push(
			createMessage(
				'system',
				interpolate(defaultPrompt, {
					instructions: defaultInstructions,
				} as const),
			),
		)
	}

	if (!interactive) {
		messages.push(createMessage('user', positionals.join(' ')))
	}

	return messages
}

export default getInitialMessages
