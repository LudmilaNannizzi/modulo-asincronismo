
// necesitamos url base 
// TS (time start)
// necesitamos la public key
// hash -MD5- (se hace x el generador)

// http://gateway.marvel.com/v1/public/comics?ts=1&apikey=1234&hash=ffd275c5130566a2916217b101f26150
//--                  url base-      -recurso--TS- -api publica- -HASH-  

// variables de scope universal : 
const urlBase = `http://gateway.marvel.com/v1/public/`
let ts = `ts=1`
const publicKey = "&apikey=d3abb539098557030e53849b9dc73d81"
const hash = "&hash=56d3e07a1a8a5d3e0602e841365c58f5"
let title = ""


const getMarvelCharacters = async() => {
    const url = `${urlBase}characters?${ts}${publicKey}${hash}`
    const response = await fetch(url)
    const data = await response.json()
    // console.log(data.data.results)
    return data
}
getMarvelCharacters()

// title             ?         `&title=${title}`      :         ""
//title existe    entonces      devolveme esto      sino      devolveme string vacio


const getMarvelComics = async(title) => {
    let existTitle = title? `&titleStartsWith=${title}` :""
    const url = `${urlBase}comics?${ts}${publicKey}${hash}${existTitle}`
    console.log(url);
    const response = await fetch(url)
    const data = await response.json()
    console.log(data.data.results)
    return data.data.results
}

//imprimir los comic en pantalla
//--- pantalla de comic necesitamos tener un buscador 
//--- filtrar por titulo (input ;) )



//imprimir los personajes

const just = (selector) => document.querySelector(selector);

// LA FILTRACION X COMIKKK
const printComic = async(title) => {
    const comics = await getMarvelComics(title)
    console.log(comics);
    just(".characters-cards").innerHTML = ``

    for(let comic of comics ){
        just(".characters-cards").innerHTML += `
        <div class="border-neutral-500	rounded-lg">
            <img src="" alt="">
            <p class="font-bold">${comic.title}</p>
            <p class="font-semibold">SOY GENERO</p>
            <p class="font-semibold">Status: <span class="font-light"></span></p>
        </div>
        `
    }
}
printComic()

// SE HACE LA FILTRACION 

just(".input-text-filter").addEventListener("input", () => {
    console.log("ME EJECUTE" , just(".input-text-filter").value)
    console.log(printComic(just(".input-text-filter").value))
})