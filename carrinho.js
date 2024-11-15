const Produto = require('./produto.js');;

class Carrinho extends Produto{
    itens;
    
    constructor(nome, preco, quantidade){
        super (nome, preco, quantidade);
        this.itens = [];
        
    }

    AdicionarCarrinho(item){
       this.itens.push(item);
      
       console.log(`O item ${item.nome} adicionado com sucesso! :)`)        
    }
    

    mostrarItensAtualizados() {
        console.log("Itens da lista: ");
        if (this.itens.length === 0) {
            console.log("Sua lista está vazia! :/");
            return;
        } else {
            this.itens.forEach(item => {
                console.log(item);
                item.MostrarProduto();
            });
        }
    }   SomaQuantidade(soma = 0){
            console.log("A soma da quantidade dos produtos: ");
            if (this.itens.length === 0) {
                console.log("Sua lista está vazia! não tem como somar os valores e os produtos. :/");
                return;
            }
            
            this.itens.forEach(item => {
                    soma = soma+ item.quantidade;
                    
                });
                console.log("A quantidade total é: ",soma);
        }
        SomaPreco (soma = 0){
            if(this.itens.length === 0){
                console.log("Não exite nenhum preço na sua lista! :/");
                return;
            }

            this.itens.forEach(item =>{
                soma = soma + item.preco;
            });
            console.log("O total de preço é: ", soma)
    }    

}


module.exports = Carrinho;