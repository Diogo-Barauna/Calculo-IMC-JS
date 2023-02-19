const form = document.querySelector('.form')
//Previnindo o formulário de recarregar a página
form.addEventListener('submit', function(e){
    e.preventDefault();
    //Pegando os valores de peso e altura
    const inputPeso = e.target.querySelector('.peso');
    const inputAltura = e.target.querySelector('.altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    //Checando se os valores de peso e altura são válidos
    if (!peso){
        setResultado('Peso inválido', false);
        return;
    }
    if (!altura){
        setResultado('Altura inválida', false);
        return;
    }

    
    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMC é ${imc}(${nivelImc})`;

    setResultado(msg, true);
});

//Pegando o 'nível' do IMC
function getNivelImc(imc){
    const nivel = ['Abaixo do peso', 'Peso normal','Sobrepeso','Obesidade grau 1','Obesidade grau 2','Obesidade grau 3']

    if (imc >= 39.9) return nivel[5];
    if(imc >= 34.9) return nivel[4];
    if(imc >= 29.9) return nivel[3];
    if(imc >= 24.9) return nivel[2];
    if(imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
}

//Função que calcula o IMC
function getImc (peso, altura){
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

//Função que cria um parágrafo no HTML
function criaP (){ 
    const p = document.createElement('p');
    return p;
}

//Função que define se a mensagem foi de sucesso ou erro por meio da classe e envia ela para o HTML
function setResultado(msg, isValid){
    const resultado = document.querySelector('.res')
    resultado.innerHTML = '';
    const p = criaP();
    if (isValid){ 
        p.classList.add('success')
    } else {
        p.classList.add('error')
    }
    p.innerHTML = msg;
    resultado.appendChild(p)
}
