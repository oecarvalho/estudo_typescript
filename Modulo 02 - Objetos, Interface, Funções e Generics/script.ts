class Produto {
    nome: string;

    constructor(nome: string){
        this.nome = nome;
    }
}

const livro = new Produto('A guerra dos tronos');

console.log(livro.nome)