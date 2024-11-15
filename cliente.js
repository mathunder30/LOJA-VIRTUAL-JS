const Produto = require('./produto.js');;
const Carrinho = require('./carrinho.js');;

const produto1 = new Produto("macarrao", 2.33,2);
const produto2 = new Produto("toddy", 7,3)
const produto3 = new Produto("hot pocket", 5.76,5)
const lista = new Carrinho();

lista.AdicionarCarrinho(produto1);
lista.AdicionarCarrinho(produto2);
lista.AdicionarCarrinho(produto3);
lista.mostrarItensAtualizados();
lista.SomaQuantidade();