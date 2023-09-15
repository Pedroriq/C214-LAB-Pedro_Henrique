const { expect } = require('chai');
const { calcularIMC } = require('../src/imc');

describe('Calculadora de IMC', () => {


  it('Calculadora deve rodar tranquilo', () => {
    const peso = 80; // 80 kg
    const altura = 180; // 180 cm

    const IMEsperado = (peso / Math.pow(altura / 100, 2)).toFixed(2);
    const IMCCalculado = calcularIMC(peso, altura);
    expect(IMCCalculado.imc).to.equal(IMEsperado);
  });



  it('altura = 0, entrada inadequada', () => {
    const peso = 70; // 70 kg
    const altura = 0; // 0 cm

    const IMCCalculado = calcularIMC(peso, altura);

    expect(IMCCalculado.imc).to.equal('NaN');
  });

  it('peso < 0, entrada inadequeada', () => {
    const peso = -100;
    const altura  = 170;

    const IMCCalculado = calcularIMC(peso, altura);

    expect(IMCCalculado.imc).to.equal('NaN')
  })

  it('Calculador retorna um numero',() => {
    const peso = 100;
    const altura  = 170;

    IMCCalculado = calcularIMC(peso, altura);

    expect(IMCCalculado.index).equal('Obesidade de grau I')

  })

});