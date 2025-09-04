let numSorteados = [];
let numLimite = 10;
let numSecreto = gerarNumSecreto();
let tentativas = 0;
let numChutados = [];

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

function gerarNumSecreto() {
  let num = Math.floor(Math.random() * numLimite + 1);

  if (numSorteados.length >= numLimite) {
    numSorteados = [];
  }

  if (numSorteados.includes(num)) {
    return gerarNumSecreto();
  } else {
    numSorteados.push(num);
    return num;
  }
}

function limparCampo() {
  let chute = document.querySelector("input");
  chute.value = "";
}

function habilitarBotaoReiniciar() {
  let botao = document.getElementById("reiniciar");
  botao.removeAttribute("disabled");
}

function desabilitarBotaoReiniciar() {
  let botao = document.getElementById("reiniciar");
  botao.setAttribute("disabled", "true");
}

function desabilitarBotaoChutar() {
  let botao = document.getElementById("chutar");
  botao.setAttribute("disabled", "true");
}

function reiniciarJogo() {
  exibirTextoNaTela("h1", "Jogo do Número Secreto");
  exibirTextoNaTela("p", "Escolha um número entre 1 e 10");
  limparCampo();
  tentativas = 0;
  numSecreto = gerarNumSecreto();
  numChutados = [];
  desabilitarBotaoReiniciar();
}

function verificarChute() {
  let chute = document.querySelector("input").value;
  let chuteRepetido = false;

  for (let i = 0; i <= numChutados.length; i++) {
    if (numChutados[i] == chute) {
      chuteRepetido = true;
    }
  }

  if (chuteRepetido) {
    alert(`O número ${chute} já foi chutado. Tente outro número.`);
    limparCampo();
  } else {
    numChutados.push(chute);
    tentativas++;

    if (chute == numSecreto) {
      let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";

      exibirTextoNaTela("h1", "Acertou!");
      exibirTextoNaTela(
        "p",
        `Você descobriu o número secreto em ${tentativas} ${palavraTentativa}`
      );
      habilitarBotaoReiniciar();
      desabilitarBotaoChutar();
    } else {
      exibirTextoNaTela("h1", "Errou!");

      if (tentativas >= 3) {
        alert("Suas tentativas se esgotaram. Tente novamente mais tarde");
        reiniciarJogo();
      } else {
        if (numSecreto > chute) {
          exibirTextoNaTela(
            "p",
            "Tente novamente! O número secreto é maior que " + chute
          );
        } else {
          exibirTextoNaTela(
            "p",
            "Tente novamente! O número secreto é menor que " + chute
          );
        }
      }
    }

    limparCampo();
  }
}

exibirTextoNaTela("h1", "Jogo do Número Secreto");
exibirTextoNaTela("p", "Escolha um número entre 1 e 10");
desabilitarBotaoReiniciar();
