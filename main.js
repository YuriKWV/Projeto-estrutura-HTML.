let numero1 = document.querySelector('#entrada1');
let numero2 = document.querySelector('#entrada2');
let resultado = document.querySelector('#resultado');

function somar(){
    let final = Number (numero1.value) + Number (numero2.value);
    resultado.value = final;
    
}

function subtrair(){
  let final = Number (numero1.value) - Number (numero2.value);
  resultado.value = final;
}
function multiplicar(){
  let final = Number (numero1.value) * Number (numero2.value);
  resultado.value = final;
}
function dividir(){
  let final = Number (numero1.value) / Number (numero2.value);
  resultado.value = final;
}



/*function imc(){

  
      let altura = document.querySelector('#altura');
      let peso = document.querySelector('#peso');
      let imc = Number(peso.value)/(Number(altura)*Number(altura.value));


      document.querySelector('#imc').value = imc;
      let consideracoes = document.querySelector('#consideracoes')
      if(imc < 18.5){
          consideracoes.textContent = 'Abaixo do Peso';
      }else if(imc >= 18.5 && imc <= 24.9){
        consideracoes. textContent= 'Peso Normal';
      }else if(imc >= 24.9){
        consideracoes.textContent = 'peso Acima';
      }
  
}*/
function imc() {
   
  let altura = document.querySelector('#altura').value;
  let peso = document.querySelector('#peso').value;

  let resultadoIMC = Number(peso) / (Number(altura) * Number(altura));

  document.querySelector('#imc').value = resultadoIMC.toFixed(2);

  // Definir as considerações baseadas no IMC calculado
  let consideracoes = document.getElementById('consideracoes');
  if (resultadoIMC < 18.5) {
      consideracoes.textContent = 'Abaixo do peso';
  } else if (resultadoIMC >= 18.5 && resultadoIMC <= 24.9) {
      consideracoes.textContent = 'Peso normal';
  } else if (resultadoIMC >= 25 && resultadoIMC <= 29.9) {
      consideracoes.textContent = 'Sobrepeso';
  } else if (resultadoIMC >= 30 && resultadoIMC <= 34.9) {
      consideracoes.textContent = 'Obesidade grau 1';
  } else if (resultadoIMC >= 35 && resultadoIMC <= 39.9) {
      consideracoes.textContent = 'Obesidade grau 2';
  } else {
      consideracoes.textContent = 'Obesidade grau 3';
  }

}


