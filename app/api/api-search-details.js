'use strict'

const searchBar$$ = document.getElementById('searchBar');


const pokeData = async (name, drawPokemon) => {
    try {

        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const data = await res.json();

        drawPokemon(data);


    } catch (error) {
        console.log(error);

    }
        
}




const search = (drawPokemon) => {

    if(!isNaN(searchBar$$.value)){
        alert('escribe el nombre de un pokémon');
    }else{
        pokeData(searchBar$$.value, drawPokemon);
    }
    searchBar$$.value = '';


}

export { search, pokeData };
