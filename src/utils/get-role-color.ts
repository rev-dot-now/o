/**
 * Returns the color associated with a given role.
 * @param {string} role - The role for which to get the color.
 * @returns {string} The color associated with the role.
 */
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
