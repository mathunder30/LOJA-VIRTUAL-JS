const Produto = require('./produto.js');;

class Carrinho extends Produto{
    itens;
    
    constructor(nome, preco, quantidade, id){
        super (nome, preco, quantidade, id);
        this.itens = [];
        
    }

    AdicionarCarrinho(item){
        // push serve para adicionar o indice dentro do array
       this.itens.push(item);
      
       console.log(`O produto ${item.nome} foi adicionado com sucesso! :)`)        
    }

    AtualizarProdutoNome(id, novoNome){
        const prod = this.itens.find(u => u.id === id);
    if(prod){
        prod.nome = novoNome;
        console.log(`O produto com o codigo ${id} foi atualizado para ${novoNome}`)
    }
    }

    deletarProduto(id){
        const prod = this.itens.findIndex(u => u.id === id);

        if (prod !== -1){
            const removido = this.itens.splice(prod, 1);
            console.log(`Produto ${removido[0].nome} removido com sucesso! :)`)
    } else{
        console.log("Usuario não encontrado")
    }

    }
    
// para não esquecer!! lenght serve como contador de indice dentro de uma array
// por exemplo. let num = array[1,2,3] o length faz a contagem. num.length[3] 
    mostrarItensAtualizados() {
        console.log("Itens da lista: ");
        if (this.itens.length === 0)  { 
            console.log("Sua lista está vazia! :/");
            return;
        } else {
            this.itens.forEach(item => { 
                console.log(item);
                item.MostrarProduto();
            });
        }
    } 



    
    
    
        SomaQuantidade(soma = 0){
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