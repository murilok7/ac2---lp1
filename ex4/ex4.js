let nomeCompleto = "João Silva"; // colocar o nome

nomeCompleto.split('').forEach(caractere => {
  if (caractere !== ' ') { // com o split transformamos a string do nome Completo em um array de caracteres, onde cada posição contem uma letra ou espaço.
    contadorLetras++;
  }
});

console.log(`O nome "${nomeCompleto}" possui ${contadorLetras} letras (excluindo espaços).`);
