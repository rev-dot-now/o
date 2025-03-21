import { describe, expect, it } from 'bun:test'
import getArgs from './get-args'

describe('getArgs', () => {
	it('should parse command line arguments correctly', () => {
		const args = getArgs(['--system', 'file1.txt', '--interactive'])
		expect(args.values.system).toEqual(['file1.txt'])
		expect(args.values.interactive).toBe(true)
	})
})
