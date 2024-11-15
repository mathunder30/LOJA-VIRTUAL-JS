const Produto = require('./produto.js');;

class Carrinho extends Produto{
    itens;
    soma;

    constructor(nome, preco, quantidade, soma){
        super (nome, preco, quantidade);
        this.itens = [];
        this.soma = soma;
    }

    AdicionarCarrinho(item){
       this.itens.push(item);
      
       console.log(`O ${item.nome} adicionado com sucesso! :)`)        
    }
    

    mostrarItensAtualizados() {
        console.log("Itens da lista: ");
        if (this.itens.length === 0) {
            console.log("Sua lista está vazia! :/");
        } else {
            this.itens.forEach(item => {
                console.log( item);
                item.MostrarProduto();
            });
        }
    } SomaQuantidade(soma){
        console.log("A soma da quantidade dos produtos: ");
        if (this.itens.length === 0) {
            console.log("Sua lista está vazia! não tem como somar os valores e os produtos. :/");
        } else {
            Object.values(this.itens).forEach(item => {
                soma = soma+item;
                console.log(soma);
                
            });
        }
        }

   
    
}


module.exports = Carrinho;