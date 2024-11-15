const Produto = require('./produto.js');;
const Carrinho = require('./carrinho.js');;

const macarrao = new Produto("macarrao", 2.33,2);
const lista = new Carrinho();

lista.AdicionarCarrinho(macarrao);
lista.mostrarItensAtualizados();