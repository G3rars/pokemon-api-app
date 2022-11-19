'use strict'


// ------------------------------funcion para dibujar el pokemon----------------------------------------------

const drawRandomCard = async (pokemon, id) => {

  scrollPage()

  const main$$ = document.getElementById('cardRandom')

  const name = document.createElement('h4');
  const img = document.createElement('img');
  const abilities = document.createElement('div');
  const legend = document.createElement('div');
  const moves = document.createElement('moves');
  const order = document.createElement('order');

  img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;


  // -------------------------bucle para acceder al objeto de movimientos del pokemon-----------------------------


  let movesPoke;
  for (let m of pokemon.moves) {
    movesPoke = m.move.name;

  }

  // ------------------------------bucle para acceder al objeto de habilidades del pokemon-----------------------------
  
  let abilitiesPoke;
  for (let index = 0; index < 2; index++) {

    for (let a of pokemon.abilities) {
      abilitiesPoke = a.ability.name;
    }

  }

  // ----------------------------------clases para dar estilo-------------------------
  name.className = 'pokeName';
  img.className = 'pokeImageRandom';
  legend.className = 'legend';
  order.className = 'numberOrder';

  
    // -----------------------------agregando los objetos al html------------------------------------------------
  moves.textContent = ('Special Move:' + '   ' + movesPoke);
  name.textContent = pokemon.name;
  abilities.textContent = ('Ability:' + '   ' + abilitiesPoke);
  order.textContent = pokemon.order;
  
  main$$.replaceChildren(order);
  main$$.appendChild(name);
  main$$.appendChild(img);
  main$$.appendChild(legend)
  legend.appendChild(abilities);
  legend.appendChild(moves);
}

const scrollPage = () => {
  window.scrollTo(0, document.body.scrollHeight);
};

export{ drawRandomCard }




