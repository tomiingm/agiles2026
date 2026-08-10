function testSumarCeroMasCero() {
    numero1 = 0;
    numero2 = 0;
    const calc = new Calculadora();
    const resultado = calc.sumar(numero1, numero2);
    assert.strictEquals(resultado, 0);
}

testSumarCeroMasCero();