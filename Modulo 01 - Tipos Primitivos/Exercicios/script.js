"use strict";
// ======================
// 🟢 Nível Básico
// ======================
let user = {
    nome: "Felipe",
    email: 'email@email.com.br',
    idade: 26,
    ativo: true
};
function login({ nome, email, idade, ativo }) {
    if (idade >= 18) {
        return (console.log(`Login Realizado! Bem vindo ${nome}.`));
    }
    else {
        return (console.log("Login não pode ser Realizado! Usuário menor de idade!"));
    }
}
login(user);
const livros = [
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
];
function disponibilidade(livros) {
    return console.log(livros.filter((index) => index.disponivel === true));
}
disponibilidade(livros);
// 13. Crie uma função que receba um array de Usuario e retorne os com idade > 25.
const users = [
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
];
function verificaUser(usuario) {
    return console.log(usuario.filter((index) => index.idade > 25));
}
verificaUser(users);
// 14. Crie um type Contato com nome e telefone. Crie uma função que receba uma lista de contatos e retorne o telefone de um nome.
// 17. Crie uma função que receba um array de (string | number) e separe em dois arrays: um com strings e outro com números.
// 18. Crie uma interface Funcionario com nome, cargo e salario.
//     Crie uma função que receba um array de funcionários e retorne o total da folha salarial.
// 19. Crie um array de Produto e uma função cadastrarProduto que adicione um produto válido ao array.
// 20. Crie um tipo RespostaServidor com dois formatos:
//     sucesso: { sucesso: true, dados: string[] }
//     erro: { sucesso: false, erro: string }
//     Crie uma função que trate a resposta e exiba uma mensagem apropriada.
