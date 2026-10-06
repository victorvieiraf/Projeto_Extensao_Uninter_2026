var RESPOSTAS_CORRETAS = [
    "q1_1_3", //
    "q1_2_1", //
    "q1_3_2", //
    "q1_4_3", //
    "q2_1_3", //
    "q2_2_3", //
    "q2_3_4", //
    "q2_4_4", //
    "q3_1_4", //
    "q3_2_3", //
    "q3_3_1", //
    "q3_4_4", //
    "q4_1_1", //
    "q4_2_4", //
    "q4_3_3", //
    "q4_4_1", //
    "q5_1_1", //
    "q5_2_1", //
    "q5_3_2", //
    "q5_4_1", //
    "q6_1_2", //
    "q6_2_4", //
    "q7_1_1", //
    "q7_2_2", //
    "q7_3_3", //
    "q7_4_1"  //
]

function resultados(){
    calcular();
    document.getElementById("obterResultados").setAttribute('disabled');
}

function obterDados(){
    //formulario + FormData
    var form = document.getElementById("formulario");
    var formData = new FormData(form);

    //Obter dados;
    var respostas = [];
    for (var [key,value] of formData.entries()){
        respostas.push(value);
    }
    return respostas;
}

function calcular(){
    var respostasCertas=0
    for (i of obterDados()){
        if (RESPOSTAS_CORRETAS.includes(i)){
            respostasCertas += 1;
        }
    }
    exibir(respostasCertas);
}

function exibir(data){
    var texto = document.getElementById("resultados");
    texto.classList.remove('minuto');
    texto.classList.add('crescer');


    var texto2 = document.getElementById("oferecer");
    //texto2.classList.remove('oferecerFim')
    texto2.classList.add('oferecerFim')


    var formString = "Você acertou "+data+" resposta"
    if (data != 1){
        formString += 's';
    }
    formString+='!'
    texto.innerText = formString;
    colorir();
}

function colorir(){
    //Array-like com todos os packs de alternativas
    var allAlternativa = document.getElementsByClassName("alternativas");

    //loop 1: pack de alternativas
    for (packAlternativas of allAlternativa){
        for (alternativa of packAlternativas.children){
            var Arr = Array.from(packAlternativas.children);
            if (alternativa.hasAttribute('value')){
                if (RESPOSTAS_CORRETAS.includes(alternativa.getAttribute('value'))){
                    Arr[Arr.indexOf(alternativa)+1].classList.add('verde');
                }
                else{
                    Arr[Arr.indexOf(alternativa)+1].classList.add('vermelho');
                    'vermelho';
                }
            }
        }
    }
    
}