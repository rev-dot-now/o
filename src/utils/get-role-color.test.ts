import { describe, expect, it } from 'bun:test'
import getRoleColor from './get-role-color'

describe('getRoleColor', () => {
	it('should return correct color for roles', () => {
		expect(getRoleColor('user')).toBe('blue')
		expect(getRoleColor('assistant')).toBe('green')
		expect(getRoleColor('system')).toBe('red')
		expect(getRoleColor('unknown')).toBe('white')
	})
})
