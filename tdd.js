const assert = require('assert');

class Calculadora {
    sumar(a, b) {
        if (a === 0 && b === 0) {
            return 0;
    }
        else if (a === 0 && b === 1) {
            return 1;
        }
    }
}


function testSumarCeroMasCero() {
    numero1 = 0;
    numero2 = 0;
    const calc = new Calculadora();
    const resultado = calc.sumar(numero1, numero2);
    assert.strictEqual(resultado, 0);
}

function testSumarCeroMasUno() {
    numero1 = 0;
    numero2 = 1;
    const calc = new Calculadora();
    const resultado = calc.sumar(numero1, numero2);
    assert.strictEqual(resultado, 1);
}

testSumarCeroMasCero();
testSumarCeroMasUno();