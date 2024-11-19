# Carrinho de Compras Simples em Node.js

Este projeto é uma implementação básica de um sistema de carrinho de compras utilizando Node.js e conceitos de programação orientada a objetos (POO). Ele inclui funcionalidades para adicionar produtos ao carrinho, atualizar, deletar e exibir os itens, além de calcular o total de preços e quantidades.

## Estrutura do Projeto

O projeto está estruturado com as seguintes classes:

### Produto
Classe base para os demais produtos. Contém os atributos e métodos comuns a todos os produtos.

- **Atributos:** `nome`, `preco`, `quantidade`, `id`
- **Método:** `MostrarProduto()`

### Livro
Subclasse de `Produto`, representando livros.

- **Atributos adicionais:** `autor`, `nome_livro`
- **Método adicional:** `MostrarProduto()` (sobrescreve o da classe `Produto` para incluir informações específicas de livros)

### Jogo
Subclasse de `Produto`, representando jogos.

- **Atributos adicionais:** `nome_jogo`, `console`
- **Método adicional:** `MostrarProduto()` (sobrescreve o da classe `Produto` para incluir informações específicas de jogos)

### Carrinho
Classe responsável por gerenciar o carrinho de compras.

- **Atributos:** `itens` (lista de produtos no carrinho)
- **Métodos principais:**
  - `AdicionarCarrinho(item)`: Adiciona um produto ao carrinho.
  - `AtualizarProdutoNome(id, novoNome)`: Atualiza o nome de um produto no carrinho.
  - `deletarProduto(id)`: Remove um produto do carrinho.
  - `mostrarItensAtualizados()`: Exibe os itens no carrinho.
  - `SomaQuantidade()`: Calcula a soma das quantidades de todos os produtos no carrinho.
  - `SomaPreco()`: Calcula o total de preços dos produtos no carrinho.

## Uso

### Pré-requisitos
- Node.js instalado na sua máquina.

### Instalação
1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/carrinho-de-compras.git
