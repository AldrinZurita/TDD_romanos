const { default: convertir } = require('./conversor');

describe("Conversor de números romanos", () => {
    test("Convierte 1 a I", () => {
        expect(convertir(1)).toBe("I");
    });

    test("Convierte 2 a II", () => {
        expect(convertir(2)).toBe("II");
    });

    test("Convierte 5 a V", () => {
        expect(convertir(5)).toBe("V");
    });


});