const getRoleColor = (role: string) => {
	switch (role) {
		case 'user':
			return 'blue'
		case 'assistant':
			return 'green'
		case 'system':
			return 'red'
		default:
			return 'white'
	}
}

export default getRoleColor
