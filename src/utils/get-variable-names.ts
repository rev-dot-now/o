export type ExtractTemplateVariables<T extends string> =
	T extends `${string}{${infer VarName}}${infer Rest}`
		? VarName | ExtractTemplateVariables<Rest>
		: never

const VARIABLE_NAME_PATTERN = /\{([^}]+?)\}/g

const getVariableNames = <T extends string>(template: T) => {
	const matches = new Set()

	for (const [_, match] of template.matchAll(VARIABLE_NAME_PATTERN)) {
		if (!matches.has(match)) matches.add(match)
	}

	return [...matches] as ExtractTemplateVariables<T>[]
}

export default getVariableNames
