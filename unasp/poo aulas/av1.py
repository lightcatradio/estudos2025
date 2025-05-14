class Carros:
    def __init__(self,placa,marca,modelo,km):
        self.placa = placa
        self.marca = marca
        self.modelo = modelo
        self.km = km
        self.velocidade = '0'
        self.marcha = '0'
        
    def mudarvelocidade(self,novavelocidade):
        self.velocidade = novavelocidade

    def mudarmarcha(self,novamarcha):
        self.marcha = novamarcha

    def dadosdocarro(self):
        dados = "Este carro é um: " + self.marca + " " + self.modelo  
        dados = dados + " com " + self.km + " rodados e neste momento está a "
        dados = dados + self.velocidade + " por hora na marcha " + self.marcha
        return dados

meucarro1 = Carros('XYZ4321','BMW','X6','20000')
meucarro2 = Carros('WWW1111','VW','Fusca','200.000')
meucarro3 = Carros('MMM0000','Audi','A4','5.000')

print(meucarro1.dadosdocarro())
march = input('Digite nova marcha:')
meucarro2.mudarmarcha(march)
print(meucarro2.dadosdocarro())
vel = input('Digite velocidade atual:')
meucarro3.mudarvelocidade(vel)
print(meucarro3.dadosdocarro())
