export type Action<T extends string = string, P = unknown> = {
	type: T
	payload: P
}
