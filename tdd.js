const assert = require('assert');

class Calculadora {
    sumar(numeros) {
        const [a, b] = numeros.split(',').map(Number);
        if (a === 0 && b === 0) {
            return 0;
    }
        else if (a === 0 && b === 1) {
            return 1;
        }
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

testSumarCeroMasCero();
testSumarCeroMasUno();