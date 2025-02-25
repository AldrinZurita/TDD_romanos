const { default: convertir } = require('./conversor');

describe("Conversor de números romanos", () => {
    test("Convierte 1 a I", () => {
        expect(convertir(1)).toBe("I");
    });
});