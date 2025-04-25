class Carros:
    def __init__(self, placa, marca, modelo, km):
        self.placa = placa
        self.marca = marca
        self.modelo = modelo
        self.km = km
        self.velocidade = 0
        self.marcha = 0

    def mudarvelocidade(self, novavelocidade):
        self.velocidade = novavelocidade

    def mudarmarcha(self, novamarcha):
        self.marcha = novamarcha

    def dadosdocarro(self):
        return f'Este carro é um {self.marca} {self.modelo} com {self.km} kilometros rodados e neste momento está a {self.velocidade} km/h na marcha {self.marcha}'


carros_criados = []

while True:
    if input('Deseja criar um carro novo? (s/n): ').lower()[0] == 'n':
        break
    else:
        placa = input('Digite a placa do carro: ')
        marca = input('Digite a marca do carro: ')
        modelo = input('Digite o modelo do carro: ')
        km = int(input('Digite o km do carro: '))
        velocidade = int(input('Digite a velocidade do carro: '))
        marcha = int(input('Digite a marcha do carro: '))

        novo_carro = Carros(placa, marca, modelo, km)
        novo_carro.mudarvelocidade(velocidade)
        novo_carro.mudarmarcha(marcha)
        carros_criados.append(novo_carro)
        
        print(novo_carro.dadosdocarro())

