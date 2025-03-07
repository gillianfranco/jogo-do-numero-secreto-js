alert("Bem vindo(a) ao jogo do número secreto!");

let chute;
let numeroSecreto = 5;
let tentativas = 5;

while (true) {
  let chute = parseInt(prompt("Chute um número de 1 a 10"));

  console.log("Resultado da comparação: ", chute == numeroSecreto);

  if (chute == numeroSecreto) {
    console.log(`Parabéns, você acertou! O número secreto é ${numeroSecreto}`);
    break;
  } else {
    tentativas--;
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
  }
}
