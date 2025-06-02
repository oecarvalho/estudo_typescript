// 1. Crie um objeto representando um carro com as seguintes propriedades:
// - marca (string)
// - modelo (string)
// - ano (number)
// Em seguida, exiba as propriedades no console usando `console.log`.

// 2. Crie uma função chamada `formatarLivro` que receba como argumento um objeto representando um livro,
// com as propriedades: `titulo` (string), `autor` (string) e `numeroPaginas` (number).
// A função deve retornar uma string no seguinte formato:
// "O livro 'TÍTULO' foi escrito por AUTOR e possui X páginas."

// 3. Defina uma interface chamada `Pessoa` com os seguintes campos:
// - nome: string
// - idade: number
// - profissao: string
// Depois, crie dois objetos que implementem essa interface.
// Exiba os dados dessas pessoas no console.

// 4. Crie uma interface `Produto` com as seguintes propriedades:
// - nome: string
// - preco: number
// - quantidade: number
// Em seguida, crie uma função `calcularTotal` que receba um array de produtos e retorne o valor total (preco * quantidade).
// Exemplo de uso:
// calcularTotal([{ nome: 'Camiseta', preco: 50, quantidade: 2 }]) => 100

// 5. Crie uma interface `Usuario` com as propriedades:
// - nome: string
// - email: string
// - isActive: boolean
// Depois, crie uma função `filtrarUsuariosAtivos` que receba um array de usuários e retorne apenas os que estão ativos.
// Exemplo: [{nome: "João", isActive: true}, {nome: "Maria", isActive: false}] => retorna apenas João

// 6. Crie uma função `somarNumeros` que receba dois parâmetros do tipo number
// e retorne a soma entre eles. Use tipos explícitos nos parâmetros e no retorno.

// 7. Crie uma função `converterParaMaiusculas` que receba um array de strings
// e retorne um novo array com todas as palavras em letras maiúsculas.
// Exemplo: ["abacaxi", "banana"] => ["ABACAXI", "BANANA"]

// 8. Crie uma função `repetirTexto` que receba uma string e um número (n).
// A função deve retornar a string repetida n vezes, separada por espaços.
// Exemplo: repetirTexto("oi", 3) => "oi oi oi"

// 9. Crie uma função `aplicarDesconto` que receba um objeto com as propriedades:
// - preco: number
// - desconto: number (representando percentual, ex: 10 para 10%)
// A função deve retornar o valor final após aplicar o desconto.
// Exemplo: aplicarDesconto({preco: 100, desconto: 20}) => 80

// 10. Crie uma função genérica chamada `retornarPrimeiroElemento` que receba um array de qualquer tipo T
// e retorne o primeiro elemento desse array. O tipo do retorno deve ser o mesmo do tipo do array.
// Exemplo: retornarPrimeiroElemento([1, 2, 3]) => 1
//          retornarPrimeiroElemento(["a", "b", "c"]) => "a"

// 11. Crie uma função genérica `inverterArray` que receba um array de qualquer tipo T
// e retorne um novo array com os elementos em ordem reversa.
// Exemplo: inverterArray([1, 2, 3]) => [3, 2, 1]

// 12. Crie uma interface genérica chamada `RespostaAPI<T>` que contenha:
// - dados: T
// - sucesso: boolean
// - mensagem?: string (opcional)
//
// Depois, crie uma função `simularResposta` que retorna uma `RespostaAPI<string[]>` com alguns dados fictícios.

// 13. Crie uma função genérica chamada `filtrarItens<T>` que receba:
// - um array de qualquer tipo T
// - uma função callback que retorna true para os itens que devem permanecer
// A função deve retornar um novo array apenas com os itens aprovados.
// Exemplo: filtrarItens([1,2,3,4], item => item > 2) => [3,4]

// 14. Crie uma função genérica `compararValores<T>` que receba dois valores do mesmo tipo
// e retorne true se forem estritamente iguais (`===`) ou false se forem diferentes.
// Exemplo: compararValores(10, 10) => true
//          compararValores("a", "b") => false