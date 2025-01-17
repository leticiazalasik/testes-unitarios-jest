const { soma } = require('../calculadora');
const { subtracao } = require('../calculadora');
const { divisao } = require('../calculadora');
const { multiplicacao } = require('../calculadora');

describe('Calculadora', () => {

  //TESTES DE SOMA 

  test('deve somar dois números positivos corretamente', () => {
    // Arrange (Preparação)
    const num1 = 2;
    const num2 = 3;
    
    // Act (Ação)
    const resultado = soma(num1, num2);
    
    // Assert (Verificação)
    expect(resultado).toBe(5);
  });

  test('deve somar um número negativo com um positivo corretamente', () => {
    // Arrange (Preparação)
    const num1 = -2;
    const num2 = 3;
    
    // Act (Ação)
    const resultado = soma(num1, num2);
    
    // Assert (Verificação)
    expect(resultado).toBe(1);
  });

//TESTES DE SUBTRAÇÃO 
  test('deve subtrair dois números corretamente', () => {
    // Arrange (Preparação)
    const num1 = 3;
    const num2 = 2;

    // Act (Ação)
    const resultadoSubtracao = subtracao(num1, num2);

    // Assert (Verificação)
    expect(resultadoSubtracao).toBe(1);
  });

  test('deve subtrair um número negativo de um número positivo', () => {
    // Arrange (Preparação)
    const num1 = -3;
    const num2 = 2;

    // Act (Ação)
    const resultadoSubtracao = subtracao(num1, num2);

    // Assert (Verificação)
    expect(resultadoSubtracao).toBe(-5);
  });

  test('deve subtrair zero de um número positivo', () => {
    // Arrange (Preparação)
    const num1 = 0;
    const num2 = 3;

    // Act (Ação)
    const resultadoSubtracao = subtracao(num1, num2);

    // Assert (Verificação)
    expect(resultadoSubtracao).toBe(-3);
  });

//TESTES DE MULTIPLICACAO 

test('multiplicar um numero positivo por outro positivo corretamente', () => {
  // Arrange (Preparação)
  const num1 = 2;
  const num2 = 3;

  // Act (Ação)
  const resultadoMultiplicacao = multiplicacao(num1, num2);

  // Assert (Verificação)
  expect(resultadoMultiplicacao).toBe(6);
});

test('multiplicar um numero positivo por outro negativo corretamente', () => {
  // Arrange (Preparação)
  const num1 = 2;
  const num2 = -3;

  // Act (Ação)
  const resultadoMultiplicacao = multiplicacao(num1, num2);

  // Assert (Verificação)
  expect(resultadoMultiplicacao).toBe(-6);
});

test('multiplicar um numero por zero corretamente', () => {
  // Arrange (Preparação)
  const num1 = 0;
  const num2 = 3;

  // Act (Ação)
  const resultadoMultiplicacao = multiplicacao(num1, num2);

  // Assert (Verificação)
  expect(resultadoMultiplicacao).toBe(0);
});

//TESTES DE DIVISÃO
test('Dividir um número positivo por outro positivo corretamente', () => {
  // Arrange (Preparação)
  const num1 = 6;
  const num2 = 2;

  // Act (Ação)
  const resultadoDivisao = divisao(num1, num2);

  // Assert (Verificação)
  expect(resultadoDivisao).toBe(3);
});

test('Dividir um número negativo por um número positivo corretamente', () => {
  // Arrange (Preparação)
  const num1 = -10;
  const num2 = 2;

  // Act (Ação)
  const resultadoDivisao = divisao(num1, num2);

  // Assert (Verificação)
  expect(resultadoDivisao).toBe(-5);
});

test('Dividir zero por um numero positivo corretamente', () => {
  // Arrange (Preparação)
  const num1 = 0;
  const num2 = 10;

  // Act (Ação)
  const resultadoDivisao = divisao(num1, num2);

  // Assert (Verificação)
  expect(resultadoDivisao).toBe(0);
});

test('Dividir um número positivo por zero corretamente', () => {
  // Arrange (Preparação)
  const num1 = 10;
  const num2 = 0;

  // Act (Ação)
  const resultadoDivisao = divisao(num1, num2);

  // Assert (Verificação)
  expect(resultadoDivisao).toBe(0);
});
});