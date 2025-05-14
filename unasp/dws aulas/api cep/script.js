function buscarCEP() {
  const cep = document.getElementById("cep").value.replace(/\D/g, "");

  if (cep.length !== 8) {
    alert("CEP inválido. Por favor, insira exatamente 8 números.");
    return;
  }

  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((response) => response.json())
    .then((data) => {
      if (data.erro) {
        alert("CEP não encontrado.");
        return;
      }

      document.getElementById("resultado").innerHTML = `
        <h3>Resultado:</h3>
        <p><strong>Logradouro:</strong> ${data.logradouro}</p>
        <p><strong>Bairro:</strong> ${data.bairro}</p>
        <p><strong>Cidade:</strong> ${data.localidade}</p>
        <p><strong>Estado:</strong> ${data.uf}</p>
      `;
    })
    .catch((error) => {
      console.error("Erro ao buscar o CEP:", error);
      alert("Ocorreu um erro ao buscar o CEP. Tente novamente mais tarde.");
    });
}
