function calcularIMC(peso, altura) {
    if (altura <= 0) {
      return 'NaN'; // Retorna "NaN" se a altura for igual a zero
    }

    if (peso <= 0 ) {
        return 'NaN'; //Retorna "NaN" se o peso for igual a zero
    }
  
    const alturaMetros = altura / 100; // Converte altura de centímetros para metros

    imc = (peso / (alturaMetros * alturaMetros)).toFixed(2)

    index = verifyIndex(imc)

    return {
        imc,
        index
    }// Calcula o IMC com duas casas decimais
}

function verifyIndex(bmi){

    let index;

    if (bmi < 18.5){
        index = 'Abaixo do peso';
    }else if (bmi >= 18.5 && bmi < 25.0){
        index = 'Peso ideal (parabéns)';
    }else if (bmi >= 25.0 && bmi < 30.0){
        index = 'Levemente acima do peso';
    }else if (bmi >= 30.0 && bmi < 35.0){
        index = 'Obesidade de grau I';
    }else if (bmi >= 35.0 && bmi < 40.0){
        index = 'Obesidade de grau II';
    }else if (bmi > 40){
        index = 'Obesidade de grau III (mórbida)'
    }else{
        index = 'IMC inválido ou 0'
    }

    return index;
	}

module.exports = { calcularIMC }; // Exporta a função calcularIMC
