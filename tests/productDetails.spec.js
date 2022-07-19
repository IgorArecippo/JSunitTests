const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    expect(typeof productDetails).toEqual('function');
    const product = productDetails('Alcool gel', 'Máscara');
    expect(Array.isArray(product)).toBeTruthy();
    expect(Object.entries(product).length).toEqual(2);
    expect(typeof product).toEqual('object');
    expect(product).toEqual(product);
    expect(product[0].details.productId).toMatch(/123/);
    expect(product[1].details.productId).toMatch(/123/)
  });
});
