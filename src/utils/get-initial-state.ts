import {
	defaultInstructions,
	defaultPrompt,
	templateInstructions,
} from '~/prompts/system'
import type { AppState } from '~/state/slices/chat-slice'
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
const getInitialState = async () => {
	const initialState: AppState = {
		userMessageContent: '',
		messages: [],
		isLoading: false,
		hasInvoked: false,
	}
	const {
		values: { system },
		positionals,
	} = args

	// If the CLI invocation has the `system` flag...
	if (system) {
		for await (const fileName of system) {
			const file = Bun.file(fileName)
			const content = await file.text()

			// If the system prompt template has variables...
			if (hasVariables(content)) {
				initialState.messages.push(
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
				// Otherwise the system prompt template does NOT have variables...
			} else {
				initialState.messages.push(
					createMessage(
						'system',
						interpolate(defaultPrompt, {
							instructions: content,
						} as const),
					),
				)
			}
		}
		// If the CLI invecation does NOT have the `system` flag...
	} else {
		initialState.messages.push(
			createMessage(
				'system',
				interpolate(defaultPrompt, {
					instructions: defaultInstructions,
				} as const),
			),
		)
	}

	// If there is an incoming user message at CLI invocation...
	if (positionals.length > 0) {
		initialState.messages.push(createMessage('user', positionals.join(' ')))
	}

	return initialState
}

export default getInitialState
