import getVariableNames from './get-variable-names'
import { describe, it, expect } from 'bun:test'

describe('getVariableNames', () => {
	it('should extract variable names from a template string', () => {
		const template = 'Hello {name}, your order {orderId} is ready.'
		const result = getVariableNames(template)

		expect(result).toEqual(['name', 'orderId'])
	})

	it('should handle duplicate variable names and return unique values', () => {
		const template =
			'Hello {name}, your order {orderId} is ready. {name}, please confirm.'
		const result = getVariableNames(template)

		expect(result).toEqual(['name', 'orderId'])
	})
})
