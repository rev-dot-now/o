import store from './store';

test('should initialize the store correctly', () => {
    const state = store.getState();
    expect(state).toHaveProperty('chatSlice');
});
