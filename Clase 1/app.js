const root = document.getElementById("root");
let a = 10;
let b = 20;

const suma = () => {
  return a + b;
};
/* console.log(suma()); */

const resta = () => {
  return a - b;
};
/* console.log(resta()); */

const printData = (arr) => {
  let card = "";

  arr.forEach((personaje) => {
    card =
      card +
      `
        <div>
        <p>Nombre: ${personaje.name}</p>
        </div>
        `;
  });
  root.innerHTML = card;
};

const getData = async () => {
  const response = await fetch(`https://rickandmortyapi.com/api/character/`); //Trae informacion de la API(Servico backend)
  const json = await response.json();

  console.log(response, "RESPONSE");
  console.log(json, "JSON");
  printData(json.results);
};
getData();

fetch(`https://rickandmortyapi.com/api/character/2`, {
  method: GET,
}).then((res) =>
  res
    .json()
    .then((response) => console.log(response))
    .catch((e) => console.error(new Error(e)))
);

const callApi = async () => {
  const url = "https://pokeapi.co/api/v2/pokemon/ditto";
  const response = await fetch(url);
  const data = await response.json();

  console.log(data, "DATA DITTO");
};
callApi();
