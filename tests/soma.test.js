const {soma, potencia} = require('../scr/soma.js');

test('soma 1 + 3 igual a 4', () => {
    expect(soma(1,3)).toBe(4);
});

test ('3 elevado a 3 igual a 27', () => {
    expect(potencia(3,3)).toBe(27);
});