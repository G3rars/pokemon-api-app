'use strict'

import { pokeData } from '../api/api-search-details.js'
import { drawPokemon } from './pokeSearch.js';

const cards$$ = () =>{
    const deletePoke$$ = document.getElementById('listPoke');
    const card$$ = document.querySelector('#divList').children;
  
    for (let i = 0; i < card$$.length; i++){
      card$$[i].addEventListener('click', (e) => {
        deletePoke$$.innerHTML = '';
        const name = document.getElementsByClassName("pokeName").innerText = e.target.id
  
        pokeData(name, drawPokemon);
        
      })
    }
  }

  export { cards$$ }