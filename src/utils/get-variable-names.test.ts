import { describe, expect, it } from 'bun:test'
import getVariableNames from './get-variable-names'

describe('getVariabelNames', () => {
	it('should extract variable names from template string', () => {
		const template = 'Hello {name}, welcome to {place}.'
		const result = getVariableNames(template)
		expect(result).toEqual(['name', 'place'])
	})
})
