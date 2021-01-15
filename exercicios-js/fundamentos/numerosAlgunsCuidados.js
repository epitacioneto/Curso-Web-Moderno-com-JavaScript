console.log(7 / 0) // funciona, dá infinito
console.log("12" / 2) // funciona, desde que a string seja apenas um numero, inteiro ou real
console.log("Show!" * 2) // não funciona, se a intenção é repetir Show! duas vezes
console.log(0.1 + 0.7) // gera uma aproximação do numero, para fins de diminuir o gasto de memória e execução do código, essa implementação por baixo do código é o que vemos em calculo numérico (padrão IEEE)
// console.log(10.toString()) não funciona
console.log((10.735).toFixed(2))
console.log('3' + 2) // isso não soma! ele irá concatenar, pois estamos falando de contexto de strings e não de números