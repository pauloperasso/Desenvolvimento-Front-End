
//Função criada porém re-definida posteriormente (Undefined)
function hello () {
    console.log("Hello")
}
hello()

//Função que está valendo
function hello (nome) {
    console.log("Hello, " + nome)
}

//Executando a função com um nome pré-definido
hello("Pokémon")

//Executando uma função com retorno
function soma(a,b) {
    return a + b
}

const s = soma(1,2)
console.log(s)
console.log(soma(3,4));

//Função que retorna algo, com parâmetros
const quadrado = function (n) {
    return n*n
}

console.log(quadrado(10))

//Função com e sem parâmetros pré definidos
const dobro = function (n){
    return n*2
}
console.log("Dobro sem parâmetro: " + dobro())
console.log("Dobro com parâmetro: " + dobro(4))

const ehPar = n => 
    n % 2 === 0
    
console.log(ehPar(20))