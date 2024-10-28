let numeros = [2, 5, 8, 13, 16, 21];
let novoArray = [];

numeros.forEach(num => 
    {
  if (num % 2 !== 0) {
    let randomMultiplier = Math.floor(Math.random() * 10) + 1; 
    novoArray.push(num * randomMultiplier);
  } else {
    novoArray.push(num);
  }
  
});

console.log(novoArray);
