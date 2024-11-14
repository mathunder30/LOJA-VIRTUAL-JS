class Carrinho{
    item;
    adicionar;

    constructor(adicionar){
        this.item = []; 
        this.adicionar = adicionar;
    }

    AdicionarCarrinho(quantidade){
        this.adicionar = this.item.push(quantidade);
        }
}

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

const macarrao = new Carrinho(2);
console.log(macarrao.AdicionarCarrinho());