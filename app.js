let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {

  let campo = document.querySelector(tag);
  campo.innerHTML = texto;

  if ('speechSynthesis' in window) {
    let utterance = new SpeechSynthesisUtterance(texto);
    utterance.lang = 'pt-BR';
    utterance.rate = 1.2;
    window.speechSynthesis.speak(utterance);
  } else {
    console.log("Web speech API não suportada neste navegador")
  }
}

function exibirMensagemInicial() {
exibirTextoNaTela('h1', 'Jogo do Número Secreto');
exibirTextoNaTela('p', 'Escolha o Número entre 1 e 10');
};

exibirMensagemInicial();

function verificarChute() {
  let chute = document.querySelector('input').value;

  if (chute == numeroSecreto) {
    exibirTextoNaTela('h1', 'Acertou!');
    let palavraTentativa = tentativas > 1 ? 'tentativas' :
      'tentativa';
    let mensagemTentativas = `Você descobriu o Número Secreto com ${tentativas} ${palavraTentativa}!`;
    exibirTextoNaTela('p', mensagemTentativas);
  } else {
    if (chute > numeroSecreto) {
      exibirTextoNaTela('p', 'O Número  secreto é Menor ⬇!');
    } else {
      exibirTextoNaTela('p', 'O Número secreto é Maior ⬆!');
      document.getElementById('reiniciar').removeAttribute
        ('disabled');
    }

    tentativas++;
    limpaCampo();

  }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementoNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementoNaLista == numeroLimite) {
      listaDeNumerosSorteados = []
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
      return gerarNumeroAleatorio();
    } else {
      listaDeNumerosSorteados.push(numeroEscolhido);
      console.log(listaDeNumerosSorteados)
      return numeroEscolhido;
    }
}

function limpaCampo() {
  chute = document.querySelector('input');
  chute.value = '';
}

function reiniciarJogo() {
   numeroSecreto = gerarNumeroAleatorio();
   limpaCampo();
   tentativas = 1;
   exibirMensagemInicial();
   document.getElementById('reiniciar').setAttribute('disabled',
   true);
}