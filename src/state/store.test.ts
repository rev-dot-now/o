import { describe, expect, it } from 'bun:test'
import store from './store'

describe('store', () => {
	it('should initialize the store correctly', () => {
		const state = store.getState()
		expect(state).toHaveProperty('chatSlice')
	})
})
