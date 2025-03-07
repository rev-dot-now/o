import getInitialMessages from './get-initial-messages';


test('should retrieve initial messages', async () => {
    const messages = await getInitialMessages();
    expect(Array.isArray(messages)).toBe(true);
});
