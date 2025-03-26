/**
 * Creates a message object with a unique ID.
 * @param {string} role - The role of the message sender.
 * @param {string} content - The content of the message.
 * @returns {{ id: string; role: string; content: string }} The created message object.
 */
const createMessage = (role: string, content: string) => {
	const id = `${role}-${performance.now()}`

	return { id, role, content }
}

export default createMessage
