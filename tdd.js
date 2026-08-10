const assert = require('assert');

class Calculadora {
    sumar(numeros) {
    return numeros.split(',').map(Number).reduce((acc, n) => acc + n, 0);
}
}


function testSumarCeroMasCero() {
    numeros = "0,0";
    const calc = new Calculadora();
    const resultado = calc.sumar(numeros);
    assert.strictEqual(resultado, 0);
}

function testSumarCeroMasUno() {
    numeros = "0,1";
    const calc = new Calculadora();
    const resultado = calc.sumar(numeros);
    assert.strictEqual(resultado, 1);
}

function testSumarUnoMasUnoMasUno() {
    numeros = "1,1,1";
    const calc = new Calculadora();
    const resultado = calc.sumar(numeros);
    assert.strictEqual(resultado, 3);
}

testSumarCeroMasCero();
testSumarCeroMasUno();
testSumarUnoMasUnoMasUno();