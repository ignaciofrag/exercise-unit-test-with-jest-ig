// Importar la función sum del archivo app.js
const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    expect(dollars).toBe(expected);
});
// Prueba para la conversión de dólar a yen
test("One dollar should be converted to yens", function() {
    
    const yens = fromDollarToYen(1);
    const expected = 1 / 1.07 * 156.5; // Convertimos 1 dólar a euros y luego a yens
    expect(yens).toBeCloseTo(expected);
});

// Prueba para la conversión de yen a libra
test("One yen should be converted to pounds", function() {
    const pounds = fromYenToPound(1);
    const expected = 1 / 156.5 * 0.87; // Convertimos 1 yen a euros y despues a libras
    expect(pounds).toBeCloseTo(expected);
});