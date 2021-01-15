const escola = "Cod3r"

console.log(escola.charAt(4)) // também começa pelo indice zero, como em C
// quando tentar acessar uma parte do código que não existe (como charAt(5)), o charAt retorna vazio

console.log(escola.charCodeAt(3)) // retorna o numero da tabela ASCII
console.log(escola.indexOf('3'))

console.log(escola.substring(1))
console.log(escola.substring(0, 3)) // pega do zero até o indice 2

console.log('Escola '.concat(escola).concat("!")) // concatena o que você quiser, manipulando corretamente a função
console.log(escola.replace(/\d/, 'e')) // /\d/ faz parte de funções de rejects, pesquisar depois
console.log('Ana,Maria,Pedro'.split(','))

// no contexto de strings, o simbolo + concatena strings