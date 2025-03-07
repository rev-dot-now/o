import getVariableNames from './get-variable-names';

test('should extract variable names from template string', () => {
    const template = "Hello {name}, welcome to {place}.";
    const result = getVariableNames(template);
    expect(result).toEqual(['name', 'place']);
});
