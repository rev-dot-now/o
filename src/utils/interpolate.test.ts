import interpolate from './interpolate'
import { describe, it, expect } from 'bun:test'

describe('interpolate', () => {
	it('should interpolate a string', () => {
		const result = interpolate('Hello {name}', { name: 'World' })
		expect(result).toBe('Hello World')
	})
})
