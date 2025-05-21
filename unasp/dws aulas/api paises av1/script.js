document.getElementById("searchbox").addEventListener("input", () => {
  const searchbox = document.getElementById("searchbox").value.toLowerCase();
  const countryDivs = document.querySelectorAll(".country");
  countryDivs.forEach((countryDiv) => {
    const countryName = countryDiv.dataset.name;
    countryDiv.style.display = countryName.includes(searchbox)
      ? "block"
      : "none";
  });
});

// COMENTÁRIO REFERENTE À FUNÇÃO DE PESQUISA: Nós começamos pegando o elemento que tem o ID "searchbox" dentro do documento, ou seja, do arquivo HTML. Adicionamos um evento input, ou seja, toda vez que algo for digitado dentro da searchbox (que é um input) uma função é executada. Essa função inicia pegando o valor do campo de pesquisa como um const, ou seja, uma variável imutável, e o converte para minúsculas. Logo depois ela pega a lista de todos os elementos com a classe "country", armazenando essa NodeList (lista de elementos HTML) novamente como const. Logo após isso, utilizamos o método forEach nessa NodeList, ou seja, executamos uma função para cada elemento nessa lista. Nesse caso, a função executada serve para comparar o valor na caixa de pesquisa com os nomes dos países presentes na NodeList. Usando const novamente, armazenamos o nome do país onde a função está sendo executada. Esse nome vem de um data attribute que o país tem. Se o nome do país contiver o texto pesquisado, ele será exibido; caso contrário, será ocultado.

document.querySelectorAll(".regionbuttons button").forEach((button) => {
  button.addEventListener("click", () => {
    const selectedRegion = button.dataset.region;
    document.querySelectorAll(".country").forEach((country) => {
      const region = country.dataset.region;
      country.style.display =
        selectedRegion === "todos" || region === selectedRegion
          ? "block"
          : "none";
    });
  });
});

// COMENTÁRIO REFERENTE À FUNÇÃO DE FILTRO POR REGIÃO: Iniciamos pegando todos os botões dentro do elemento com a classe "regionbuttons". Para cada botão dentro da NodeList resultante, adicionamos um evento de clique, ou seja, toda vez que esse botão sofrer um clique, uma função será executada. Dentro dessa função, que chamamos de "callback", iniciamos armazenando a região que o botão representa, que está armazenada em data attributes. Logo após, assim como na função acima, pegamos todos os elementos com a classe "country" e para cada um deles, pegamos o valor do data attribute que representa a região do país. Se a região do país for igual à região do botão, o país será exibido; caso contrário, ele será ocultado. Se o botão "todos" for clicado, todos os países serão exibidos.

const response = fetch("https://restcountries.com/v3.1/all");
response
  .then((response) => response.json())
  .then((countries) => {
    const main = document.querySelector("main");
    countries.forEach((country) => {
      const countryDiv = document.createElement("div");
      countryDiv.classList.add("country");

      countryDiv.dataset.region = country.region.toLowerCase();
      countryDiv.dataset.name = country.translations.por.common.toLowerCase();

      let translatedRegion;
      switch (country.region) {
        case "Africa":
          translatedRegion = "África";
          break;
        case "Americas":
          translatedRegion = "Américas";
          break;
        case "Asia":
          translatedRegion = "Ásia";
          break;
        case "Europe":
          translatedRegion = "Europa";
          break;
        case "Oceania":
          translatedRegion = "Oceania";
          break;
        case "Antarctic":
          translatedRegion = "Antártica";
          break;
        default:
          translatedRegion = country.region;
      }

      countryDiv.innerHTML = `
      <h2>${country.translations.por.common}</h2>
      <img src="${country.flags.png}" alt="Bandeira de ${
        country.translations.por.common
      }" />
      <p>Capital: ${country.capital ? country.capital : "Não definida"}</p>
      <p>População: ${country.population}</p>
      <p class="regiontext">Região: ${translatedRegion}</p>
      `;
      main.appendChild(countryDiv);
    });
  });

// COMENTÁRIO REFERENTE À FUNÇÃO DE BUSCA DOS PAÍSES: Iniciamos fazendo uma requisição para a API dos países, que retorna uma lista de países. Assim que a requisição é feita, ela retorna uma promise, ou seja, uma promessa de que o resultado será retornado em algum momento. Assim que o resultado é retornado, ele é convertido para JSON e armazenado na variável "countries". Logo após isso, pegamos o elemento "main" do HTML e para cada país dentro da lista de países, criamos um novo elemento div com a classe "country". Dentro dessa div, adicionamos a classe "country" e os data attributes que representam a região e o nome do país, tudo em minúsculo. Depois disso, usamos um switch case para traduzimos a região do país para português. Nós pegamos a variável "translatedRegion" e a inicializamos como o valor da região do país, mas traduzido. Depois disso, adicionamos o HTML dentro da div que criamos, com os dados do país. Esses dados vem diretamente do JSON que obtvemos antes. Por fim, adicionamos essa div dentro do elemento "main" do HTML.
