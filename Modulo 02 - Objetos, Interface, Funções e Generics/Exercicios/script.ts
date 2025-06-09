// -------------------- OBJETOS --------------------

// 1. Crie um objeto representando um carro com as seguintes propriedades:
// - marca (string)
// - modelo (string)
// - ano (number)
// Em seguida, exiba as propriedades no console usando `console.log`.

const carro = {
    marca: 'BYD',
    modelo: "Dolphin",
    ano: 2024
}

console.log(`Possuo um carro da ${carro.marca}, modelo: ${carro.modelo} e do ano: ${carro.ano}`)



// 2. Crie uma função chamada `formatarLivro` que receba como argumento um objeto representando um livro,
// com as propriedades: `titulo` (string), `autor` (string) e `numeroPaginas` (number).
// A função deve retornar uma string no seguinte formato:
// "O livro 'TÍTULO' foi escrito por AUTOR e possui X páginas."

function formatarLivro(livro: {titulo: string, autor: string, numeroPaginas: number}){
    return console.log(`O livro ${livro.titulo} foi escrito por ${livro.autor} e possui ${livro.numeroPaginas} páginas.`)
}

const livroTeste ={
    titulo: "Star Wars",
    autor: 'George Lucas',
    numeroPaginas: 300
}

formatarLivro(livroTeste)

// 3. Defina uma interface chamada `Pessoa` com os seguintes campos:
// - nome: string
// - idade: number
// - profissao: string
// Depois, crie dois objetos que implementem essa interface.

interface Pessoa {
    nome: string,
    idade: number,
    profissao: string
}

const pessoa1: Pessoa = {
    nome: 'Felipe',
    idade: 26,
    profissao: "Analista de Produtos"
}


// 4. Crie uma interface `Produto` com as seguintes propriedades:
// - nome: string
// - preco: number
// - quantidade: number
// Em seguida, crie uma função `calcularTotal` que receba um array de produtos e retorne o valor total (preco * quantidade).


interface Produto {
    nome: string,
    preco: number,
    quantidade: number
}

function calcularTotal(produtos: Produto[]){
    let somaProdutos = 0;

    produtos.forEach((elemento)=>{
        somaProdutos = somaProdutos + (elemento.preco * elemento.quantidade)
    })

    return somaProdutos
}

const produtos: Produto[] = [
  { nome: "Notebook", preco: 3500, quantidade: 10 },
  { nome: "Mouse", preco: 50, quantidade: 100 },
  { nome: "Teclado", preco: 120, quantidade: 80 },
  { nome: "Monitor", preco: 900, quantidade: 25 }
];

console.log(calcularTotal(produtos))

// 5. Crie uma interface `Usuario` com as propriedades:
// - nome: string
// - email: string
// - isActive: boolean
// Depois, crie uma função `filtrarUsuariosAtivos` que receba um array de usuários e retorne apenas os que estão ativos.


interface Usuario {
    nome: string,
    email: string,
    isActive: boolean
}

const usuarios: Usuario[] = [
  { nome: "Ana Paula", email: "ana.paula@email.com", isActive: true },
  { nome: "João Silva", email: "joao.silva@email.com", isActive: false },
  { nome: "Marcos Lima", email: "marcos.lima@email.com", isActive: true },
  { nome: "Juliana Alves", email: "juliana.alves@email.com", isActive: false }
];

function filtrarUser(usuarios: Usuario[]){
    return usuarios.filter((usuario) => usuario.isActive);
}

console.log(filtrarUser(usuarios))


// 6. Crie uma função `somarNumeros` que receba dois parâmetros do tipo number
// e retorne a soma entre eles. Use tipos explícitos nos parâmetros e no retorno.

function somar(a: number, b: number): number {
  return a + b;
}


// 7. Crie uma função `converterParaMaiusculas` que receba um array de strings
// e retorne um novo array com todas as palavras em letras maiúsculas.

const frutas: string[] = ["Maçã", "Banana", "Laranja", "Uva"];

function converterParaMaiusculas(frutas: string[]){
    return frutas.map((fruta)=> fruta.toUpperCase())
}

console.log(converterParaMaiusculas(frutas))

// 8. Crie uma função `repetirTexto` que receba uma string e um número (n).
// A função deve retornar a string repetida n vezes, separada por espaços.

function repetirTexto(texto: string, numero: number){
    for(let i = 0; i < numero; i++){
        return console.log(texto)
    }
}

repetirTexto("Eu serei um engenheiro de software com foco em front-end foda!!", 4)

// 9. Crie uma função `aplicarDesconto` que receba um objeto com as propriedades:
// - preco: number
// - desconto: number (representando percentual, ex: 10 para 10%)
// A função deve retornar o valor final após aplicar o desconto.

const energetico = {
    preco: 10,
    desconto: 5
}

function aplicarDesconto(produto: {preco: number, desconto: number}){
    let desconto = produto.preco * (produto.desconto / 100);
    return produto.preco - desconto
}

console.log(aplicarDesconto(energetico))

// 10. Crie uma função genérica chamada `retornarPrimeiroElemento` que receba um array de qualquer tipo T
// e retorne o primeiro elemento desse array.

function retornarPrimeiroElemento<T>(array: T[]): T {
    return array[0]
}

const numeros = [10, 20, 30];
const nomes = ["Ana", "Carlos", "João"];


console.log(retornarPrimeiroElemento(numeros))
console.log(retornarPrimeiroElemento(nomes))


// 11. Crie uma função genérica `inverterArray` que receba um array de qualquer tipo T
// e retorne um novo array com os elementos em ordem reversa.

const numero = [1, 2, 3, 4, 5];

function inverterArray<T>(array: T[]): T[]{
    return array.reverse()
}

console.log(inverterArray(numero))

// 12. Crie uma interface genérica chamada `RespostaAPI<T>` que contenha:
// - dados: T
// - sucesso: boolean
// - mensagem?: string
// Depois, crie uma função `simularResposta` que retorna uma `RespostaAPI<string[]>` com alguns dados fictícios.

interface ResportaAPI<T> {
    dados: T,
    sucesso: boolean,
    mensagem?: string
}

function simularResposta(): ResportaAPI <string[]> {
    return {
        dados: ['item1', 'item2'],
        sucesso: true,
        mensagem: 'Dados carregados com sucesso!'
    }
}

console.log(simularResposta)

// 13. Crie uma função genérica chamada `filtrarItens<T>` que receba:
// - um array de qualquer tipo T
// - uma função callback que retorna true para os itens que devem permanecer
// A função deve retornar um novo array apenas com os itens aprovados.

function filtrarItens<T>(array: T[], callback: (item: T) => boolean): T[] {
    let armazenaResultado: T[] = []; //cria um array generico e vazio
    for (let item of array){ //para cada item do array que vamos passar
        if(callback(item)){ // se o valor for true 
            armazenaResultado.push(item) // armazena o valor
        }
    }
    return armazenaResultado
}

const pares = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const numerosPares = filtrarItens(pares, (n) => n % 2 ===0)

console.log(numerosPares)

// 14. Crie uma função genérica `compararValores<T>` que receba dois valores do mesmo tipo
// e retorne true se forem estritamente iguais (`===`) ou false se forem diferentes.

function comparaValor<T>(valor1: T, valor2: T): boolean{
    
    if(valor1 === valor2){
        return true
    }

    return false
}

console.log(comparaValor("Felipe", "Felipe"))

// 15. Crie um enum chamado `CoresPrimarias` com os valores: "Vermelho", "Amarelo" e "Azul".
// Em seguida, crie uma função que receba uma cor do tipo `CoresPrimarias` e retorne uma mensagem como:
// "Você escolheu a cor Azul."

enum CoresPrimarias {
    Vermelho = 'vermelho',
    Amarelo = 'amarelo',
    Azul = 'azul'
}

function recebeCor(cor: CoresPrimarias){
    return console.log(`Você escolheu a cor ${cor}`)
}

recebeCor(CoresPrimarias.Azul)


// 16. Crie um enum `StatusPedido` com os valores: Pendente, Processando, Enviado, Entregue.
// Depois, crie uma função que receba um status e retorne uma mensagem apropriada para o cliente.

enum StatusPedido {
    Pendente = 'Pendente',
    Processando = "Processando",
    Enviado = "Enviado",
    Entregue = "Entregue"
}


function exibeStatus(pedido: StatusPedido){
    switch(pedido){
        case StatusPedido.Pendente:
            console.log(`Seu pedido está ${StatusPedido.Pendente}`);
            break;
        case StatusPedido.Processando:
            console.log(`Seu pedido está ${StatusPedido.Processando}`);
            break;
        case StatusPedido.Enviado:
            console.log(`Seu pedido está ${StatusPedido.Enviado}`);
            break;
        case StatusPedido.Entregue:
            console.log(`Seu pedido está ${StatusPedido.Entregue}`);
            break;
    }
}

const meuPedido: StatusPedido = StatusPedido.Processando;
exibeStatus(meuPedido)

