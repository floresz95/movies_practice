const movieCardComponent = function (title, sub, text) {
    return `
    <div class="card">
        <div class="movieTitle">${title}</div>
        <div class="movieSub">${sub}</div>
        <div class="movieText">${text}</div>
    </div>
    `
}

const movieTitleComponent = `
        <h1>Movies</h1>
    `;
//elmentjünk változóba a beerTitleComponent-et. A modern HTML olyan dinamikussá vált, hogy .js-ben adunk mindent hozzá a HTML fájlhoz. 

const loadEvent = function () {
    const rootElement = document.getElementById("root")
    console.log(rootElement);
    rootElement.insertAdjacentHTML("beforeend", movieTitleComponent)
    //két stringet kér: egy position és egy olyat amit HTML kóddá tud konvertálni

    console.log(movies.cards);
    console.log(movies.logo);

    for (const movie of movies.cards) {
        console.log(movie);
        rootElement.insertAdjacentHTML("beforeend", movieCardComponent(movie.title, movie.sub, movie.text))
    }
       
} //Ezzel a ciklussal végig lépkedek egy tömb elemein, ennek a tömbnek az elérési útvonala a beers nevű változó cards kulcsán lévő tömb. Ezt a folyamatot elnevezem, ez az elnevezés az iterátor. Később erre hivatkozom.
//attól függ, hogy milyen ciklust használok, hogy van-e adat vagy sem. Ha van adat akkor a 'for..of'-ot használjuk, ha nincsen akkor a sima 'for..'
window.addEventListener("load", loadEvent)
// addEventListener figyeli, hogy az oldalunk betöltődött-e ("load" esemény)
// minden .js dokumentumban benne kell lennie ezeknek: window.addEventListener("load", loadEvent)

console.log(window);
// a window egy esemény figyelő: a js létrehoz egy window objektumot

//Extra feladat: kapunk egy ugyanilyen data.js-t (Discord, important notes), megcsinálni ugyanígy egy külön repoba