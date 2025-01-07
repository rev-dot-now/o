const createMessage = (role: string, content: string) => {
	const id = `${role}-${Date.now()}`

	return { id, role, content }
}

export default createMessage
