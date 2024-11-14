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
        return `nome: ${this.nome}, preço: ${this.preco}, quantidade: ${this.quantidade}`;
    }
}