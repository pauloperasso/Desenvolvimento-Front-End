// Criando constantes
v1 = []
v1[0] = 2
v1[10] = 7.5
v1[3] = "abc"

console.log(v1)
console.log("Tamanho de V1" + v1.lenght)
console.table(v1)

v2 = [10, "abc", 7.5]

console.log(v2)
console.log("Tamanho de V2" + v2.lenght)
console.table(v2)

//Verifica quais nomes começam com a letra A
const nomes = ["Ana", "Alex", "Vitor", "João", "André"]
const comecamComA = nomes.filter(n => n.startsWith("A"))
console.log(comecamComA)

//Mostra a inicial de cada nome presente na lista
const letras = nomes.map(n => n.charAt(0))
console.log(letras)

//Verifica se todos da lista designada cumprem uma condição: True ou False
const todosComA = nomes.every(n => n.startsWith("A"))
console.log(todosComA)

//Acumula na variável S, a soma de N (Iteração)
const numeros = [1,2,3,4,5]
const soma = numeros.reduce((s,n) => s + n)
console.log(soma)
