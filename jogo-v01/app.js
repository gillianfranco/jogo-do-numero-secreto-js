function geraNumAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

alert("Bem vindo(a) ao jogo do número secreto!");

let chute;
let tentativas = 5;
let min = 1;
let max = 10;
let numeroSecreto = geraNumAleatorio(min, max);
console.log(numeroSecreto);

while (true) {
  let chute = parseInt(prompt(`Chute um número de ${min} a ${max}`));

  console.log("Resultado da comparação: ", chute == numeroSecreto);

  if (chute == numeroSecreto) {
    alert(`Parabéns, você acertou! O número secreto é ${numeroSecreto}`);
    break;
  } else {
    if (tentativas == 0) {
      alert("Suas tentativas acabaram! Tente novamente mais tarde.");
      break;
    } else if (chute < numeroSecreto) {
      let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
      alert(
        `Que pena, você errou! O número secreto é maior que ${chute}. Você ainda tem ${tentativas} ${palavraTentativa}.`
      );
    } else {
      alert(
        `Que pena, você errou! O número secreto é menor que ${chute}. Você ainda tem ${tentativas} ${palavraTentativa}.`
      );
    }
    tentativas--;
  }
}
