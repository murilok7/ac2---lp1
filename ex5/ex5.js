
let numerosOriginais = [4, 5, 6];
let novosNumeros = [1, 2, 3];


novosNumeros.forEach(num => {
  numerosOriginais.unshift(num);
});

// coloca o array em ordem crescente
numerosOriginais.sort((a, b) => a - b);

console.log(numerosOriginais); 
