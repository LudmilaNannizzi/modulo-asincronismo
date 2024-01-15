const charactersContainer = document.getElementById("characters-container");

const nameFilter = document.getElementById("name-filter");
const statusFilter = document.getElementById("status-filter");
const genderFilter = document.getElementById("gender-filter");

const getCharacters = async (name, status, gender) => {
  let url = "https://rickandmortyapi.com/api/character/";
  if (name || status || gender) {
    url += "?";
    if (name) {
      url += `name=${name}&`;
    }

    if (status) {
      url += `status=${status}&`;
    }

    if (gender) {
      url += `gender=${gender}`;
    }
  }

  const response = await fetch(url);
  const data = await response.json();

  return data.results;
};

const printCharacters = async (name, status, gender) => {
  const characters = await getCharacters(name, status, gender);

  console.log(name, status, gender);

  charactersContainer.innerHTML = "";

  for (let character of characters) {
    const card = document.createElement("div");
    card.classList.add("character-card");

    card.innerHTML = `
            <img src="${character.image}" />
            <h2> ${character.name} </h2>
            <p> Status: ${character.status} </p>
            <p> Especie: ${character.species} </p>
        `;

    charactersContainer.appendChild(card);
  }
};
printCharacters();

nameFilter.addEventListener("input", () => {
  console.log(
    "Name:",
    nameFilter.value,
    "status:",
    statusFilter.value,
    "gender:",
    genderFilter.value
  );
  printCharacters(nameFilter.value, statusFilter.value, genderFilter.value);
});

statusFilter.addEventListener("change", () => {
  console.log(
    "Name:",
    nameFilter.value,
    "status:",
    statusFilter.value,
    "gender:",
    genderFilter.value
  );
  printCharacters(nameFilter.value, statusFilter.value, genderFilter.value);
});

genderFilter.addEventListener("change", () => {
  console.log(
    "Name:",
    nameFilter.value,
    "status:",
    statusFilter.value,
    "gender:",
    genderFilter.value
  );
  printCharacters(nameFilter.value, statusFilter.value, genderFilter.value);
});
