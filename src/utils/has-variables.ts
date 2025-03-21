export type HasTemplateVariables<T extends string> =
	T extends `${string}{${string}}${string}` ? true : false

/**
 * Checks if a given template string contains any variables in the format `{variableName}`.
 *
 * @param template - The template string to check for variables.
 * @returns A boolean indicating whether the template contains variables.
 * @example
 * // returns true
 * hasVariables('Hello {name}');
 *
 * // returns false
 * hasVariables('Hello world');
 */
const hasVariables = <T extends string>(template: T) =>
	/\{([^}]+?)\}/g.test(template) as HasTemplateVariables<T>

export default hasVariables
