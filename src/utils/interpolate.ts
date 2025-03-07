import type { ExtractTemplateVariables } from './get-variable-names'

type VarValue = string | number

export type TemplateStringInterpolation<
    T extends string,
    V extends Record<string, VarValue | undefined>,
> = T extends `${infer Prefix}{${infer Var}}${infer Suffix}`
    ? `${Prefix}${V[Var] extends VarValue ? V[Var] : `{${Var}}`}${TemplateStringInterpolation<Suffix, V>}`
    : T

/**
 * Interpolates a template string with the provided variables.
 * @param {T} template - The template string to interpolate.
 * @param {V} variables - The variables to use for interpolation.
 * @returns {TemplateStringInterpolation<T, V>} The interpolated string.
 */
const interpolate = <
    T extends string,
    V extends Partial<Record<ExtractTemplateVariables<T>, string | number>>, 
>(
    template: T,
    variables: V,
) =>
    Object.entries(variables).reduce((acc, [key, value]) => {
        return acc.replace(new RegExp(`{${key}}`, 'g'), `${value}`) as T
    }, template) as TemplateStringInterpolation<T, V>

export default interpolate
