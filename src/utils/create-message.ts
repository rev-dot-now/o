const createMessage = (role: string, content: string) => {
	const id = `${role}-${performance.now()}`

	return { id, role, content }
}

export default createMessage
