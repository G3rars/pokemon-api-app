
const pokeData = async (id, drawRandomCard) => {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();

    drawRandomCard(data, id);

  } catch (error) {
    console.log(error);

  }

}

const pokeram = (drawRandomCard) => {
  const random = randomFun(1, 151);
  pokeData(random, drawRandomCard);
}


const randomFun = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
}



export { pokeram };

