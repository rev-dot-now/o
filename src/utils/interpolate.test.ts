import interpolate from './interpolate';

test('should interpolate template string with variables', () => {
    const template = "Hello {name}, you have {count} new messages.";
    const variables = { name: 'Alice', count: 5 };
    const result = interpolate(template, variables);
    expect(result).toBe("Hello Alice, you have 5 new messages.");
});
