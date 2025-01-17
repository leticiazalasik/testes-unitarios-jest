function soma(a, b) {
    return a + b;
  }
  
  function subtracao(a,b){
    return a -b;
  }

  function multiplicacao(a, b) {
    return a * b;
  }
  

  function divisao(num1, num2) {
    if (num2 === 0) {
      return 0;  // Ou outro valor, ou lançar um erro
    }
    return num1 / num2;
  }
  
  module.exports = { soma, subtracao, multiplicacao, divisao };

  
