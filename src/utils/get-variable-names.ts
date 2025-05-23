export type ExtractTemplateVariables<T extends string> =
	T extends `${string}{${infer VarName}}${infer Rest}`
		? VarName | ExtractTemplateVariables<Rest>
		: never

/**
 * Extracts variable names from a template string.
 * @param {T} template - The template string to extract variables from.
 * @returns {ExtractTemplateVariables<T>[]} An array of unique variable names.
 */
const getVariableNames = <T extends string>(template: T) => {
	const matches = new Set()

	for (const [_, match] of template.matchAll(/\{([^}]+?)\}/g)) {
		if (!matches.has(match)) matches.add(match)
	}

	return [...matches] as ExtractTemplateVariables<T>[]
}

export default getVariableNames
