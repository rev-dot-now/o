import { describe, expect, it } from 'bun:test'
import getInitialState from './get-initial-state'

describe('getInitialMessages', () => {
	it('should retrieve initial messages', async () => {
		const { messages } = await getInitialState()
		expect(Array.isArray(messages)).toBe(true)
	})

	it('should handle empty input', async () => {
		const initialState = await getInitialState();
		expect(initialState.messages.length).toBe(0);
	});

	it('should handle system prompts', async () => {
		const initialState = await getInitialState({ system: ['test prompt'] });
		expect(initialState.messages.length).toBeGreaterThan(0);
	});
})