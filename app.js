let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){

let campo = document.querySelector(tag);
campo.innerHTML = texto;  
}

exibirTextoNaTela('h1',  'Jogo do Número Secreto');
exibirTextoNaTela('p', 'Escolha o Número entre 1 e 10');

function verificarChute() {
    let chute = document.querySelector('input').value;
   if (chute == numeroSecreto) {
    exibirTextoNaTela('h1', 'Acertou!');
    let mensagemTentativas =`Você descobriu o Número Secreto com $!`;
     exibirTextoNaTela('p', 'Você descobriu o Número Secreto!');
   } else {
    if (chute > numeroSecreto) {
        exibirTextoNaTela('p', 'O Número  secreto é Menor ⬇!');
    } else {
        exibirTextoNaTela('p', 'O Número secreto é Maior ⬆!');
    }
   }
}

function gerarNumeroAleatorio() {
  return parseInt(Math.random() * 10 + 1);
}