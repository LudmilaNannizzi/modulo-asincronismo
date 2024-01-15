//Traernos los elementos html con los que vamos a trabajar
//Hacer un llamado a la Api
//imprimir el HTML
//Escuchar los eventos de los inputs
//Hacer una  nueva peticion a la API con los parametros que recibimos por los inputs
let charactersContainer = document.getElementById("characters-container");

const nameFilter = document.getElementById("name-filter");
const genderFilter = document.getElementById("gender-filter");
const statusFilter = document.getElementById("status-filter");

const getCharacters = async (name, gender, status) => {
  //? query = valor &
  let url = "https://rickandmortyapi.com/api/character/";

  if (name || gender || status) {
    url += "?";
    if (name) {
      url += `name=${name}&`;
    }
    if (gender) {
      url += `gender=${gender}&`;
    }
    if (status) {
      url += `status=${status}&`;
    }
    /*  (name ? (url += `name=${name}&`) : "")
    ( status ? (url += `status=${status}&`) : "")
    (gender ? (url += `gender=${gender}`) : ""); */
  }

  const response = await fetch(url);
  const data = await response.json();

  return data.results;
};

const printCharacters = async (name, gender, status) => {
  const characters = await getCharacters(name, gender, status);
  //console.log(characters);
  charactersContainer.innerHTML = ``;

  for (let character of characters) {
    charactersContainer.innerHTML += `
   <div class="card">
        <img src="${character.image}" alt="">
        <p>Nombre: <span>${character.name}</span></p>
        <p>Estado: <span>${character.status}</span></p>
        <p>Genero: <span>${character.gender}</span></p>
        <p>Última locación: <span>${character.location.name}</span></p>
    </div> `;
  }
};
printCharacters();

nameFilter.addEventListener("input", () => {
  console.log(nameFilter.value, genderFilter.value, statusFilter.value);
  printCharacters(nameFilter.value, genderFilter.value, statusFilter.value);
});

genderFilter.addEventListener("change", () => {
  printCharacters(nameFilter.value, genderFilter.value, statusFilter.value);
});

statusFilter.addEventListener("change", () => {
  printCharacters(nameFilter.value, genderFilter.value, statusFilter.value);
});

//Donde se ejecuta la función "printCharacters" por primera vez?
//En primer lugar se ejecuta en la linea 55 sin pasarle ningún parametro.
//Cómo no tiene parametros, se ejecuta el getCharacters de la 40 vacío, por lo tanto se hace el fetch a la url base
//Esto es lo que vemos cuando ingresamos a la página( TODOS LOS PERSONAJES SIN FILTROS)

//Luego se ejecuta el printCharacters en las líneas 59, 63 y 67, pasandoles como parámetro los 3 valores de los inputs.
//Se pasan los 3 valores para que los filtros sean acumulativos, es decir se puedan filtrar al mismo tiempo

//1° Se ejecuta el printCharacters con o sin parametros
//2° estos parametros se reciben en el printCharacters
//printCharacters es una función asincrona, porque de NO serlo recibiría una promesa
//En la línea 40 utilizamos el awair para que se termine de ejecutar por completo el getCharacters y nos devuelva toda la info
//3° En la 40 le pedimos que se ejecute el getCharacters pasandole los parametros que recibió printCharacters
//4° getCharacters es una funci´n asincrona que recibe los parametros de los filtros.
//Se crea la variable con la url utilizando el LET ya que la vamos a modificar posteriormente
//En el if de la 16 preguntamos si los parametros name o gender o status no estan vacíos
//En el caso de que 1 o mas se cumplan se agrega a la url base un "?"
//Dentro del mismo if de la 16 se hacen tres validaciones más
//Preguntamos si existe name y en caso que se cumpla abregamos a la urlbase `name=${name}&`.
//El ${name} es lo que ingresamos en los inputs
//Una vez contruida la url final se hace el fetch en la linea 33
//una vez que se termina de ejecutar el fetch(Que es asincrono) tranformamos la respuesta en un .json para poder manipularla.
//Finalmente retornamos la data.results

const getMarvelCharacters = async () => {
  const url_base = "http://gateway.marvel.com/v1/public/characters?ts=1";
  const key = "786109f4756fceabaa2f5fa58fe55594";
  const hash = "ebf2aeca4f4bdc5976597f1a77561b7f";
  const url = `${url_base}&apikey=${key}&hash=${hash}`;

  const response = await fetch(url);
  const data = await response.json();

  console.log(data.data.results);
};

getMarvelCharacters();

const getMarvelComics = async () => {
  const url_base = "http://gateway.marvel.com/v1/public/comics?ts=1";
  const key = "786109f4756fceabaa2f5fa58fe55594";
  const hash = "ebf2aeca4f4bdc5976597f1a77561b7f";
  const url = `${url_base}&apikey=${key}&hash=${hash}`;

  const response = await fetch(url);
  const data = await response.json();

  console.log(data.data.results);
};

getMarvelComics();
