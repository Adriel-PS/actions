const soma = require('./soma');

test('soma 1 + 3 igual a 4', () => {
    expect(soma(1,3)).toBe(4);
});
