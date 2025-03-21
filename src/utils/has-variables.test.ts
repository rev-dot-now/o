import { describe, expect, it } from 'bun:test'
import hasVariables from './has-variables'

describe('hasVariables', () => {
	it('should return true for template with variables', () => {
		const template = 'Hello {name}, welcome to {place}.'
		const result = hasVariables(template)
		expect(result).toBe(true)
	})

	it('should return false for template without variables', () => {
		const template = 'Hello world.'
		const result = hasVariables(template)
		expect(result).toBe(false)
	})

	it('should return true for template with multiple variables', () => {
		const template = '{greeting}, {name}!'
		const result = hasVariables(template)
		expect(result).toBe(true)
	})

	it('should return false for empty template', () => {
		const template = ''
		const result = hasVariables(template)
		expect(result).toBe(false)
	})
})
