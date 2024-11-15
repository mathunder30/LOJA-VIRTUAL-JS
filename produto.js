 class Produto {
    nome;
    preco;
    quantidade;

    constructor(nome, preco, quantidade){
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    MostrarProduto(){
        console.log(`\n nome: ${this.nome} \n preço: ${this.preco} \n quantidade: ${this.quantidade}`);
    }
}


module.exports = Produto;