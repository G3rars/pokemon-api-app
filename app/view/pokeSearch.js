'uses strict'


// ---------------------agregar el pokemon al html cuando se llama a la funcion---------------

const drawPokemon = (pokemons) => {

    const sectionSearh$$ = document.getElementById('pokemonSearch');
    const title = document.createElement('h4');
    const img = document.createElement('img');
    const abilities = document.createElement('div');
    const legend = document.createElement('div');
    const moves = document.createElement('moves');
    const order = document.createElement('order');

    // -------------------------bucle para acceder al objeto de movimientos del pokemon-----------------------------


    let movesPoke;
    for (let m of pokemons.moves) {
        movesPoke = m.move.name;

    }

    // ------------------------------bucle para acceder al objeto de habilidades del pokemon-----------------------------

    let abilitiesPoke;
    for (let index = 0; index < 2; index++) {

        for (let a of pokemons.abilities) {
            abilitiesPoke = a.ability.name;
        }

    }
    // ----------------------------------clases para dar estilo-------------------------

    title.className = 'pokeName';
    img.className = 'pokeImageRandom';
    legend.className = 'legend'
    order.className = 'numberOrder'

    // ----------------------------------agregando los objetos al html-----------------------------------------------

    moves.textContent = ('Special Move:' + '   ' + movesPoke);
    abilities.textContent = ('Ability:' + '   ' + abilitiesPoke);
    order.textContent = pokemons.order;
    title.textContent = pokemons.name;
    img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemons.id}.png`;

    scrollPage()

    sectionSearh$$.replaceChildren(order)
    sectionSearh$$.appendChild(title);
    sectionSearh$$.appendChild(img);
    sectionSearh$$.appendChild(legend)
    legend.appendChild(abilities);
    legend.appendChild(moves);
}

function scrollPage() {
    window.scrollTo(0, document.body.scrollHeight);
};

export { drawPokemon }
