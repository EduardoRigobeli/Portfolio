const calcular = document.getElementById('calcular');

calcular.addEventListener('click', imc);

function imc() {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('res');

    if(nome !== '' && altura !== '' && peso !== '') {
        let imc = Number(peso/(altura*altura)).toFixed(2);
        resultado.classList.remove('hidden');

        if(imc < 18.5) {
            //Baixo peso
            resultado.innerHTML= `${nome} <br>IMC = ${imc} <br>CUIDADO! Ganhe peso para melhor saúde!`; 
        } else if (imc <= 24.99) {
            //Normal
            resultado.innerHTML= `${nome} <br>IMC = ${imc} <br>Você esta no peso ideal.`; 
        } else if (imc <= 29.99) {
            //Sobrepeso
            resultado.innerHTML= `${nome} <br>IMC = ${imc} <br>CUIDADO! Perca um pouco de peso!`; 
        } else {
            //Obesidade
            resultado.innerHTML= `${nome} <br>IMC = ${imc} <br>CUIDADO! Perca peso para melhor saúde!`; 
        }
        
    } else {
        alert("[ERRO] Por favor preencha as informações abaixo!")
    }
    
}