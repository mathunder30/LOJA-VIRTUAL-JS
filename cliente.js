const Jogo = require('./jogo.js');;
const Carrinho = require('./carrinho.js');;
const Livro = require('./livro.js');;

/*const produto1 = new Produto("macarrao", 2.33,2);
const produto2 = new Produto("toddy", 7,3)
const produto3 = new Produto("hot pocket", 5.76,5)
const lista = new Carrinho();

lista.AdicionarCarrinho(produto1);
lista.AdicionarCarrinho(produto2);
lista.AdicionarCarrinho(produto3);
lista.mostrarItensAtualizados();
lista.SomaQuantidade();
lista.SomaPreco();*/
//CREATE
const produto1 = new Livro ("Livro", 59.99,1,1,"Sthepen King", "Outsider");
const produto2 = new Livro("Livro", 87.20, 1,2, "Edécio Fernando lepsen", "Lógica de Programação e Algoritmos com JavaScript - 2ª Edição: Uma introdução à programação de computadores com exemplos e exercícios para iniciantes");
const produto3 = new Jogo("Jogo", 299.90, 1,3,"Elden Ring", "Steam" )
const lista = new Carrinho();

lista.AdicionarCarrinho(produto1);
lista.AdicionarCarrinho(produto2);
lista.AdicionarCarrinho(produto3);


lista.SomaQuantidade();
lista.SomaPreco();

lista.deletarProduto(1);
lista.mostrarItensAtualizados();