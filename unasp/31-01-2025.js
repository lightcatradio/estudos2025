// EXERCÍCIO 1 

function parOuImpar(numero) {
  return numero % 2 == 0 ? `${numero} é um número PAR!` : `${numero} é um número ÍMPAR!`
}

window.alert(parOuImpar(window.prompt('Digite um número para saber se ele é PAR ou ÍMPAR')))

// A lógica que eu usei aqui foi a mais básica o possível: Se a divisão de um número por dois não deixar resto, ele é par

// EXERCÍCIO 2

function maiorNumero() {
  let numeros = []
  for (let i = 1; i < 4; i++) {
    numeros.push(window.prompt(`Digite o ${i}º número`))
  }
  return Math.max(...numeros)
}

window.alert(`O maior número digitado foi ${maiorNumero()}!`)

// Essa nem sequer precisou de muita lógica, existe um comando no Math que faz exatamente o que o enunciado pediu, eu apenas o utilizei

//  EXERCÍCIO 3

function fatorialNumero(numero) {
  if (numero == 0 || numero == 1) return `O FATORIAL do número ${numero} é 1!`

  let acumulador = 1
  for (let i = numero; i >= 1 ; i--) {
    acumulador *= i
  }
  return `O FATORIAL do número ${numero} é ${acumulador}!`
}

window.alert(fatorialNumero(window.prompt('Digite um número para saber seu FATORIAL')))

// Fatorial de um número é o resultado da multiplicação entre todos os números entre esse número em específico e zero. Isso é perfeito para fazer com o for, usando o índice para ser o número atual e multiplicar ele com um contador. Eu originalmente queria usar o método reduce mas vi que desse jeito é mais fácil

// EXERCÍCIO 4

function palindromoOuNao(palavra) {
  return palavra.toLowerCase() == palavra.toLowerCase().split('').reverse().join('') ? `A palavra ${palavra} É um PALÍNDROMO!` : `A palavra ${palavra} NÃO É um PALÍNDROMO`
}

window.alert(palindromoOuNao(window.prompt('Digite uma palavra para saber se ela é um PALÍNDROMO')))

// Nesse exercício eu apenas comparei a palavra original com a palavra invertida. Usei o split, reverse e join para reverter ela de maneira fácil

// EXERCÍCIO 5

function somarNumeros() {
  let numeros = []
  for (i = 1; i < 6; i++) {
    numeros.push(Number(window.prompt(`Digite o ${i}º número`)))
  }
  return numeros.reduce((acc, curr) => acc + curr)
}

window.alert(`A soma dos números digitados é ${somarNumeros()}!`)

// Agora sim o método reduce foi útil para mim. Eu o utilizei para fazer a soma entre todos os elementos do array, array esse que foi montado utilizando for na mesma função

// EXERCÍCIO 6

function contarVogais(palavra) {
  let contador = 0
  const vogais = 'aeiouAEIOU'
  let palavraSeparada = palavra.split('')
  
  palavraSeparada.forEach(element => {
    if (vogais.includes(element)) contador++
  });

  return `A palavra ${palavra} contém ${contador} vogais!`
}

window.alert(contarVogais(window.prompt('Digite uma palavra para conferir sua quantidade de vogais')))

// Nesse exercício utilizei o forEach e o método includes para ver se na palavra, separada em array, tinha algo em comum com a string de vogais, aí se uma semelhança fosse encontrada o contador subia

//  EXERCÍCIO 7

function inverterArray() {
  let array = []
  for (let i = 1; i < 6; i++) {
    array.push(window.prompt(`Digite o ${i}º algo (qualquer coisa que você quiser)`))
  }
  
  return `Seu array na ordem reversa ficaria assim: ${array.reverse()}`
}

window.alert(inverterArray())

// Esse exercício sete e o exercício dos palindromos seguem a exata mesma ideia, a maior diferença é que nesse o prompt tá na função e no outro não

// EXERCÍCIO 8

function primoOuNao(numero) {
  const mensagemPositiva = `O número ${numero} É um número primo!`
  const mensagemNegativa = `O número ${numero} NÃO É um número primo!`

  if (numero <= 1) return mensagemNegativa
  if (numero <= 3) return mensagemPositiva
  if (numero % 2 === 0 || numero % 3 === 0) return mensagemNegativa

  for (let i = 5; i * i <= numero; i += 6) {
    if (numero % i === 0 || numero % (i + 2) === 0) return mensagemNegativa
  }

  return mensagemPositiva
}

window.alert(primoOuNao(Number(window.prompt("Digite um número para saber se ele é primo ou não"))));

// Esse exercício tem um pouco mais de coisas por trás. De acordo com o google todo número primo acima de três pode ser escrito como 6k ± 1, então usei essa "fórmula" para fazer de forma fácil um verificador

// EXERCÍCIO 9

function fibonacci(numero) {
  let sequencia = [];

  for (let i = 0; i < numero; i++) {
    if (i === 0) {
      sequencia.push(0);
    } else if (i === 1) {
      sequencia.push(1);
    } else {
      let proximoNumero = sequencia[i - 1] + sequencia[i - 2];
      sequencia.push(proximoNumero);
    }
  }

  return `Os primeiros ${numero} números da sequência de Fibonacci são: ${sequencia}`;
}

window.alert(fibonacci(window.prompt('Quantos números da sequência de Fibonacci você deseja ver?')))

// Esse último exercício é bem fácil: Na sequência de fibonacci são somados um número e seu anterior, simples assim. Porém aqui ao invés de i e i-1 utilizamos i-1 e i-2 para não sairmos do range
