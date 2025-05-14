class Aluno:
  def __init__(self, ra, nome, nascimento, anoescolar):
    self.ra = ra
    self.nome = nome
    self.nascimento = nascimento
    self.anoescolar = anoescolar
    self.turma = ''
    self.nota1 = 0
    self.nota2 = 0
    self.nota3 = 0
    self.nota4 = 0
    self.media = 0
  
  def definir_turma(self, turma):
    self.turma = turma
  
  def definir_notas(self, notanumero, notavalor):
    match notanumero:
      case 1:
        self.nota1 = notavalor
      case 2:  
        self.nota2 = notavalor
      case 3:
        self.nota3 = notavalor
      case 4:
        self.nota4 = notavalor

    self.calcular_media()

  def calcular_media(self):
    self.media = (self.nota1 + self.nota2 + self.nota3 + self.nota4) / 4
    return self.media  

  def mostrar_dados(self):
    print(f"RA: {self.ra}\nNome: {self.nome}\nData de Nascimento: {self.nascimento}\nAno Escolar: {self.anoescolar}\nTurma: {self.turma}\nMédia: {self.media:.2f}")
    

ra = int(input("Digite o RA do aluno: "))
nome = input("Digite o nome do aluno: ")
nascimento = input("Digite a data de nascimento do aluno: ")
anoescolar = int(input("Digite o ano escolar do aluno: "))

Felipe = Aluno(ra, nome, nascimento, anoescolar)

Felipe.definir_turma(input("Digite a turma do aluno: "))

for i in range(4):
  Felipe.definir_notas(int(input("Digite a nota a ser atualizada: ")), float(input("Digite o valor da nota: ")))

Felipe.mostrar_dados()