 class Produto {
    nome;
    preco;
    quantidade;

    constructor(nome, preco, quantidade, id){
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
        this.id = id;
        
    }

    MostrarProduto(){
        console.log(`\n codigo de produto: ${this.id} \n nome: ${this.nome} \n preço: ${this.preco} \n quantidade: ${this.quantidade} \n `);
    }
}


module.exports = Produto;