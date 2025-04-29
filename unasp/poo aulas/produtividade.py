class Produtos:
    def __init__(self, nome, tipo, fabricante):
        self.nome = nome
        self.tipo = tipo
        self.fabricante = fabricante
        self.preco = 0
        self.estoque = 0
       
    def alterarpreco(self, novopreco):
        self.preco = novopreco

    def alterarestoque(self, novoestoque):
        self.estoque = novoestoque

    def calcularsaldo(self):
        saldo = self.estoque * self.preco
        return saldo

    def exibirdados(self):
        dados = 'Nome do produto: ' + self.nome + '\n'
        dados = dados + 'Tipo do produto: ' + self.tipo + '\n'
        dados = dados + 'Fabricante do produto: ' + self.fabricante + '\n'
        dados = dados + 'Preço: ' + str(self.preco) + '\n'
        dados = dados + 'Estoque: ' + str(self.estoque) + '\n'
        return dados


def CriarProduto():  
  nome = input('Digite o nome do produto: ')
  tipo = input('Digite o tipo do produto: ')
  fabricante = input('Digite o fabricante do produto: ')

  produto = Produtos(nome, tipo, fabricante)
  return produto

def AlterarProduto(index):
    produto = produtos[index]
    usuario = 'p'
    while usuario in ['p', 'e', 's', 'd']:
      print(produto.exibirdados())
      usuario = input("""\nDeseja alterar alguma informação?\n
Digite [P] para alterar o PREÇO
Digite [E] para alterar o ESTOQUE
Digite [S] para calcular o SALDO
Digite [D] para exibir os DADOS
Digite qualquer outra tecla para SAIR\n""").lower()
    
      match usuario:
        case 'p':
            preco = float(input('Digite o novo preço do produto: '))
            produto.alterarpreco(preco)
        case 'e':
            estoque = int(input('Digite o novo estoque do produto: '))
            produto.alterarestoque(estoque)
        case 's':
            print('Saldo total: R$' + str(produto.calcularsaldo()))
        case 'd':
            print(produto.exibirdados())
        case _:
            print('Produto finalizado')
            produtos.append(produto)
            break

def ObterProdutoAlterar(produtos):
    produto = int(input('Digite o número do produto que deseja alterar: ')) - 1
    AlterarProduto(produto)



produtos = []
quer = ''

while quer != 'n':
    quer = input('Deseja cadastrar um novo produto? [S/N]').lower()
    if quer == 's':
        produtos.append(CriarProduto())
    elif quer == 'n':
        ObterProdutoAlterar(produtos)
    else:
        print('Opção inválida')
