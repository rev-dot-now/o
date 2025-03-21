import { describe, expect, it } from 'bun:test'
import getInitialMessages from './get-initial-messages'

describe('getInitialMessages', () => {
	it('should retrieve initial messages', async () => {
		const messages = await getInitialMessages()
		expect(Array.isArray(messages)).toBe(true)
	})
})
