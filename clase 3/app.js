/* const datos = [
  {
    nombre: "Noe",
    michi: "Tita",
  },
  { nombre: "Jime", michi: "Rosita" },
  {
    nombre: "Fran",
    michi: "Dotti",
  },
  {
    nombre: "Sol",
    michi: "Yiyi",
  },
];

const getDatos = () => {
  return new Promise((resolve, reget) => {
    if (datos.length === 0) {
      reget(new Error("El array esta vacío"));
    }
    setTimeout(() => resolve(datos), 2000);
  });
};

 getDatos().then((datos) => console.log(datos)); 

const datosFecheados = async () => {
  try {
    const dataFeched = await getDatos();
    console.log(dataFeched);
  } catch (err) {
    console.error(err.message);
  }
};

console.log(datosFecheados());

 */

/* 
CON FETCH Y THEN
fetch(url, {
  headers: {
    "Content-Type": "application/json",
    "x-api-key":
      "live_dS9OK7DlmA1g04OZjtOBse1V45wMNFGFQJsRu2E8wt4XeOf0KHGpswrafdy0TXbs",
  },
})
  .then((data) => data.json())
  .then(console.log(data));
 */
const michisContainer = document.getElementById("michisContainer");
const url = "https://api.thecatapi.com/v1/images/search?limit=50";
/* CON  ASYNC*/
const getMichis = async () => {
  //TAMBIEN PODÍAMOS PASAR LA API EN EL
  //fetch("https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_dS9OK7DlmA1g04OZjtOBse1V45wMNFGFQJsRu2E8wt4XeOf0KHGpswrafdy0TXbs")
  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      "x-api-key":
        "live_dS9OK7DlmA1g04OZjtOBse1V45wMNFGFQJsRu2E8wt4XeOf0KHGpswrafdy0TXbs",
    },
  });
  const data = await response.json();

  printMichis(data);
};

const printMichis = (arr) => {
  let card = "";
  arr.forEach((michi) => {
    console.log(michi.breeds);
    card += `
    <div>
    <img src="${michi.url}" alt="${michi.id}">
    <p>${michi.id}</p>
    </div>
    `;
  });

  michisContainer.innerHTML = card;
};

getMichis();
