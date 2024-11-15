const Produto = require('./produto.js');
class Jogo extends Produto {
    nome_jogo;
    console;

    constructor(nome, preco, quantidade, nome_jogo, console){
        super(nome, preco, quantidade);
        this.nome_jogo = nome_jogo;
        this.console = console;
    }

    MostrarProduto(){
        super.MostrarProduto();
        console.log(`\n Jogo: ${this.nome_jogo} \n Console: ${this.console}`)
    }
}
module.exports = Jogo;