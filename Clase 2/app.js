const root = document.getElementById("root");
/* const rootRM = document.getElementById("rootRM"); */

const firstPage = document.getElementById("firstPage");
const prevPage = document.getElementById("prevPage");
const nextPage = document.getElementById("nextPage");
const lastPage = document.getElementById("lastPage");
const actualPage = document.getElementById("actualPage");

const michisImg = document.getElementById("michisImg");

let page = 1; //Page se inicializa en 1, pero cambia con los eventos de paginación

const getDataRM = async () => {
  //Indicamos que la función va a ser asíncrona
  const data = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${page}`
  ); //Llamamos a la API
  const response = await data.json(); //Pasamos el resultado a un JSON

  printDataRM(response.results); //Ejecutamos la función printDataRM pasandole como argumento los results del response del JSON
  actualPage.innerHTML = page; //Imprimimos en el HTML la página actual (Que se modifica en la función de la paginación)
  return response; //retornamos el response(datos) para poder utilizarlos luego
};
getDataRM(); //Se ejecuta la función

const printDataRM = (arr) => {
  // Le pasamos un array, que es el que traemos de nuestra API en el getDataRM
  let card = "";
  arr.forEach((personaje) => {
    card =
      card +
      `
        <div>
            <img src=${personaje.image}>
            <p>Nombre: ${personaje.name}</p>
            <p>Nombre: ${personaje.gender}</p>
            <p>Nombre: ${personaje.status}</p>
        </div>
        `;
  });
  rootRM.innerHTML = card; // Imprimimos en el html SOLAMENTE el div que creamos en la variable card
};

const pagination = async (promesa) => {
  //Decimos que la funcion va a ser asincrona y le pasamos como parametro una promesa
  const result = await promesa; // guardamos los valores de nuestra promesa, en este caso es lo que retornamos en la linea 21 (RESPONSE)

  firstPage.addEventListener("click", () => {
    //tomamos el boton del html, y le indicamos que va a estar escuchando el click
    if (page > 2) {
      //Si la agina es mayor a dos, iguale page a 1
      page = 1;
      getDataRM(); //Se vuelve a ejecutar getDataRM PERO CON LA PAGINA 1
    }
  });
  lastPage.addEventListener("click", () => {
    //tomamos el boton del html, y le indicamos que va a estar escuchando el click
    if (page < result.info.pages) {
      //Nos preguntamos si page <result.info.pages. A la información del RESULT podemos acceder porque retornamos el response en getDataRM. Esto nos trae Todo el objeto, luego ingresamos a info>pages(total de paginas en esta API)
      page = result.info.pages;
      getDataRM(); //Se vuelve a ejecutar getDataRM PERO CON LA ULTIMA PAGINA
    }
  });
  prevPage.addEventListener("click", () => {
    //tomamos el boton del html, y le indicamos que va a estar escuchando el click
    page -= 1; //Se le resta 1 al page
    getDataRM(); //Se vuelve a ejecutar getDataRM PERO PAGE- 1
  });
  nextPage.addEventListener("click", () => {
    //tomamos el boton del html, y le indicamos que va a estar escuchando el click
    page += 1; //Se le suma 1 al page
    getDataRM(); //Se vuelve a ejecutar getDataRM PERO PAGE+ 1
  });
};

pagination(getDataRM());
/* const headers = new Headers({
  "Content-Type": "application/json",
  "x-api-key": `live_dS9OK7DlmA1g04OZjtOBse1V45wMNFGFQJsRu2E8wt4XeOf0KHGpswrafdy0TXbs`,
}); */

/* const getDataPoke = async () => {
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon`);
  const response = await data.json();
  printData(response.results);
};
getDataPoke();

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
}; */
