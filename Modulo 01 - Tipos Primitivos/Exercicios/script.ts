// ======================
// 🟢 Nível Básico
// ======================

// 1. Crie variáveis do tipo number, string e boolean.
//    Depois, crie uma função que receba essas variáveis e retorne uma string com seus valores.

// let idade: number = 27;
// let nome: string = 'Felipe';
// let vivo: boolean = true;

// function definePessoa(nome: string, idade: number, vida: boolean){
//     return `O ${nome} é uma pessoa de ${idade} e está vivo? Resposta: ${vida}`;
// }

// console.log(definePessoa(nome, idade, vivo));

// 2. Crie uma variável do tipo any e atribua diferentes tipos de valores a ela.
//    Depois, converta o valor para string usando 'as'.

// let valor: any;

// valor = 10
// console.log(valor)

// valor = 'Felipe'
// console.log(valor)

// valor = true
// console.log(valor)

// let converterValor = valor as string
// console.log(converterValor) // não converte!!


// 3. Crie uma função que receba um número e retorne o dobro dele.

// function double(numero: number){
//     return numero * 2
// }

// console.log(double(4))


// 4. Crie uma variável null e outra undefined.
//    Depois, crie uma função que receba um nome (ou undefined) e retorne uma saudação com valor padrão.

// let valor1: null;
// let valor2: undefined;

// function retornaValor(nome?: string){ // a condição retorna ou uma string ou undefined
//     if(typeof nome === 'string'){
//         return `Olá ${nome}`
//     } else{
//         return `O nome está ${nome}`
//     }
// }

// console.log(retornaValor("felipe")) //se eu não colocar valor, me retorna undefined

// ======================
// 🟡 Nível Intermediário
// ======================

// 5. Crie uma função que receba um valor que pode ser string ou number.
//    Retorne uma mensagem diferente dependendo do tipo recebido.

// function retornaValor2(valor: string | number){
//         if(typeof valor === 'string'){
//             return `A informação presente na variável 'valor' é: ${valor}`
//         } else if(typeof valor === 'number'){
//             return `A informação presente na variável 'valor' é: ${valor}`
//         }
// }

// console.log(retornaValor2(1000))

// 6. Crie uma função que receba um array de strings e retorne o primeiro elemento.

// const nomes: string[] = ['Fernando', 'Felipe', 'Ferdinande', 'Francisco']

// function firstElement(nome: Array<string>){
//     return nome[0];
// }

// console.log(firstElement(nomes));

// 7. Crie uma função que receba um array de números e retorne a soma de todos os elementos.

// const numeros: number[] = [10, 20, 30, 40, 50];

// function sumNumbers(numeros: Array<number>){
//     return numeros.reduce((acumulador, indice) => acumulador + indice, 0)
// }

// console.log(sumNumbers(numeros))

// 8. Crie um type Produto com nome (string), preco (number) e disponivel (boolean).
//    Crie uma função que retorne uma descrição do produto.

// type Produto = {
//     nome: string,
//     preco: number,
//     disponivel: boolean
// }

// let produto: Produto = {
//     nome: 'Fritadeira',
//     preco: 50,
//     disponivel: true
// }

// function descreveProduto({nome, preco, disponivel}: Produto){
//     return `Este é o(a) ${nome}, que custa R$ ${preco} e se encontra disponivel no estoque? Estoque: ${disponivel}`
// }

// console.log(descreveProduto(produto))

// 9. Crie um type StatusPedido que pode ser 'pendente' | 'enviado' | 'entregue' | 'cancelado'.
//    Crie uma função que receba esse tipo e retorne uma mensagem para cada status.

// type StatusPedido = {
//     estado: 'pendente' | 'enviado' | 'entregue' | 'cancelado'
// }

// let pedido: StatusPedido = {
//     estado: 'enviado'
// }

// function rastreio({estado}: StatusPedido): string{
//     if(estado === 'pendente'){
//         console.log('Seu pedido ainda está pendente o envio.')
//     } else if(estado === 'enviado'){
//         console.log('Seu pedido já foi enviado.')
//     } else if(estado === 'entregue'){
//         console.log('Seu pedido já foi entregue.')
//     } else if(estado === 'cancelado'){
//         console.log('Seu pedido foi cancelado.')
//     } 
// }

// console.log(rastreio(pedido))

// 10. Crie uma função que receba um array de números e retorne apenas os números pares.

// const num: number[] = [1,2,3,4,5,6,7,8,9,10]

// function apenasPar(numeros: Array<number>){
//     return numeros.filter((numero) => numero %2 === 0)
// }

// console.log(apenasPar(num))

// ======================
// 🔵 Nível Avançado
// ======================

// 11. Crie uma interface Usuario com nome, email, idade e ativo.
//     Crie uma função que retorne se o usuário pode acessar o sistema (idade >= 18 e ativo).

interface Usuario {
    nome: string,
    email: string,
    idade: number,
    ativo: boolean
}

let user: Usuario = {
    nome: "Felipe",
    email: 'email@email.com.br',
    idade: 26,
    ativo: true
}

function login({nome, email, idade, ativo}: Usuario){
    if(idade >= 18 ){
        return(console.log(`Login Realizado! Bem vindo ${nome}.`))
    } else {
        return(console.log("Login não pode ser Realizado! Usuário menor de idade!"))
    }
}

login(user)

// 12. Crie uma interface Livro com titulo, autor, anoPublicacao e disponivel.
//     Crie uma função que receba um array de livros e retorne os disponíveis.

interface Livro {
    titulo: string,
    autor: string,
    anoPublicacao: number,
    disponivel: boolean
}

const livros: Livro[] = [
    {
        titulo: 'Livro 1',
        autor: 'Fulano',
        anoPublicacao: 2010,
        disponivel: false
    },
    {
        titulo: 'Livro 2',
        autor: 'Beltrano',
        anoPublicacao: 2011,
        disponivel: true
    },
    {
        titulo: 'Livro 3',
        autor: 'Cicrano',
        anoPublicacao: 2012,
        disponivel: false
    },
    {
        titulo: 'Livro 4',
        autor: 'Tetrano',
        anoPublicacao: 2013,
        disponivel: true
    },
]

function disponibilidade(livros : Array<Livro>){
    return console.log(livros.filter((index) => index.disponivel === true ))
}

disponibilidade(livros)

// 13. Crie uma função que receba um array de Usuario e retorne os com idade > 25.

const users: Usuario[] = [
    {
        nome: 'Fulano',
        email: 'email@email.com.br',
        idade: 25,
        ativo: true
    },
    {
        nome: 'Fulano',
        email: 'email@email.com.br',
        idade: 26,
        ativo: true
    },
    {
        nome: 'Fulano',
        email: 'email@email.com.br',
        idade: 18,
        ativo: true
    },
    {
        nome: 'Fulano',
        email: 'email@email.com.br',
        idade: 35,
        ativo: true
    },
    {
        nome: 'Fulano',
        email: 'email@email.com.br',
        idade: 29,
        ativo: true
    },
]

function verificaUser(usuario: Array<Usuario>){
    return console.log(usuario.filter((index) => index.idade > 25));
}

verificaUser(users)


// 14. Crie um type Contato com nome e telefone. Crie uma função que receba uma lista de contatos e retorne o telefone de um nome.

// 17. Crie uma função que receba um array de (string | number) e separe em dois arrays: um com strings e outro com números.

// 18. Crie uma interface Funcionario com nome, cargo e salario.
//     Crie uma função que receba um array de funcionários e retorne o total da folha salarial.

// 19. Crie um array de Produto e uma função cadastrarProduto que adicione um produto válido ao array.

// 20. Crie um tipo RespostaServidor com dois formatos:
//     sucesso: { sucesso: true, dados: string[] }
//     erro: { sucesso: false, erro: string }
//     Crie uma função que trate a resposta e exiba uma mensagem apropriada.