'use strict'
// -----------------------------llamada a la api--------------------------------------

const pokeList = document.getElementById('listPoke')
let pokemonRequests = []
const requestPokemons =  async  () => {
  for (let i = 1; i <= 33; i++) {
    const promisePokemon = fetch('https://pokeapi.co/api/v2/pokemon/' + i).then(res => res.json());
    
    pokemonRequests.push(promisePokemon);
  }
  Promise.all(pokemonRequests).then(results => {
    results.forEach((pokemon, index) => {
      drawPokemon(pokemon, index + 1);
    });
  })
};

// -----------------------------funcion para crear el pokemon en el html---------------------------

const drawPokemon = (pokemon, id) => {

  
  
  const pokeListDiv = document.createElement('div');
  const name = document.createElement('h3');
  const img = document.createElement('img');
  
  
  
  // ----------------------------------clases para dar estilos--------------------------------------
  
  
  pokeListDiv.classList.add('cardl');
  name.className = 'pokeName';
  img.className = 'pokeImage';
  img.id = pokemon.id

  


  //  -----------------------------------agregando los objetos al html---------------------------- 
  
  
  name.textContent = pokemon.name;
  img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  pokeListDiv.appendChild(img);
  pokeList.appendChild(pokeListDiv);
  pokeListDiv.appendChild(name);

};




export { requestPokemons }