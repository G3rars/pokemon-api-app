import { pokeram } from './api/api-random.js'
import { requestPokemons } from './view/pokeList.js'
import { drawPokemon } from './view/pokeSearch.js';
import { search } from './api/api-search-details.js';
import { drawRandomCard } from './view/pokemonRandom.js';
import { cards$$ } from './view/funcion-select-pokemon.js';


// ------------------------------boton random-------------------------------

const addListeners = () => {
  document.getElementById('buttom').addEventListener('click', () => {
    const pokemonSearch$$ = document.getElementById('pokemonSearch');
    const listPoke$$ = document.getElementById('listPoke');
    pokemonSearch$$.innerHTML = '';
    listPoke$$.innerHTML = '';
    pokeram(drawRandomCard);

  });


  //  ---------------------------boton lista y atras------------------------------- 
  document.getElementById('buttonList').addEventListener('click', () => {
    const pokemonSearch$$ = document.getElementById('pokemonSearch');
    const cardRandom$$ = document.getElementById('cardRandom');



    if (document.querySelector('.pokeImage')) {

      alert('La lista ya esta desplegada');


    } else {

      cardRandom$$.innerHTML = '';
      pokemonSearch$$.innerHTML = '';
      requestPokemons();
      setTimeout(cards$$, 100);
    
    } 

  });


  // --------------------------buscador de pokémons-----------------------
  document.getElementById('input').addEventListener('submit', (event) => {
    const cardRandom$$ = document.getElementById('cardRandom');
    const listPoke$$ = document.getElementById('listPoke');
    listPoke$$.innerHTML = '';
    cardRandom$$.innerHTML = '';
    event.preventDefault();
    search(drawPokemon);

  });
}

window.onload = () => {
  addListeners();


};






