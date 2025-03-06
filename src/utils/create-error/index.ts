import TypedError from './custom-error'

const createError = (type: string, message: string) =>
	new TypedError(type, message)

export default createError
