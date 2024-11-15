const Produto = require('./produto.js');
class Livro extends Produto {
    autor;
    nome_livro;

    constructor(nome, preco, quantidade, autor, nome_livro){
        super(nome, preco, quantidade)
        this.autor = autor;
        this.nome_livro = nome_livro;
    }

    MostrarProduto(){
        super.MostrarProduto();
        console.log(`\n Autor: ${this.autor} \n Nome Livro: ${this.nome_livro}`)

    }
}

module.exports = Livro;