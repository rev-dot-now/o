import createMessage from './create-message'
import { describe, it, expect } from 'bun:test'


describe('createMessage', () => {
	it('should create a message object with a unique ID', () => {
		const role = 'user';
		const content = 'Hello!';
		const message = createMessage(role, content);
		
		expect(message).toHaveProperty('id');
		expect(message.role).toBe(role);
		expect(message.content).toBe(content);
	})
})
