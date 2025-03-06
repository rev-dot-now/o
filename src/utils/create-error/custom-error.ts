class TypedError extends Error {
	type: string

	constructor(type: string, ...params: ConstructorParameters<typeof Error>) {
		super(...params)

		this.type = type
	}
}

export default TypedError
