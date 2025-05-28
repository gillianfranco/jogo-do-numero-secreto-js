let numSecreto = gerarNumSecreto(1, 10);
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

function gerarNumSecreto(min, max) {
  let num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
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

function reiniciarJogo() {
  exibirTextoNaTela("h1", "Jogo do Número Secreto");
  exibirTextoNaTela("p", "Escolha um número entre 1 e 10");
  limparCampo();
  tentativas = 1;
  numSecreto = gerarNumSecreto(1, 10);
  desabilitarBotaoReiniciar();
}

function verificarChute() {
  let chute = document.querySelector("input").value;

  if (chute == numSecreto) {
    let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";

    exibirTextoNaTela("h1", "Acertou!");
    exibirTextoNaTela(
      "p",
      `Você descobriu o número secreto em ${tentativas} ${palavraTentativa}`
    );
    habilitarBotaoReiniciar();
  } else {
    exibirTextoNaTela("h1", "Errou!");
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

    tentativas++;
    limparCampo();
  }
}

exibirTextoNaTela("h1", "Jogo do Número Secreto");
exibirTextoNaTela("p", "Escolha um número entre 1 e 10");
desabilitarBotaoReiniciar();
