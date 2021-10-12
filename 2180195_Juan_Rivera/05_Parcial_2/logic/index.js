const request_btn = document.getElementById("request-btn");
const poke_btn = document.getElementById("pokeSearch");
const pokeSearch = document.getElementById("pokeInput");
const cardList = document.getElementById("card-list");
const loading = '<img id="loader" class="loading" src="./assets/images/pokebola.png" alt="pokebola">'
const noPoke = `<p id="noData">There are no pokemon with that name. ¡Try again!</p>`
request_btn.addEventListener("click", this.getPokemones.bind(this));
poke_btn.addEventListener("click", this.searchPokemon.bind(this));

async function getPokemones(){

  let offset = Math.floor(Math.random() * 1103) + 1
  let info = [];
  //const pokemones = { pokemonsName: null, pokeInfo: info}
  let pokeHTML = '';

  cardList.innerHTML = loading;

  const fetchPoke = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=15&offset=${offset}`);
  const pokeJSON = await fetchPoke.json();
  const pokemones = pokeJSON.results;

  for(let i = 0; i < pokemones.length; i++){
    await fetch(pokemones[i].url)
      .then(res => res.json())
      .then(data => {
        info[i] = data;

        pokeHTML += `
        <div class="pokeCard">
          <div class="noFocus"></div>
          <img class="bg-card" src="./assets/images/PokeData.png" alt="pokeCard">
          <div class="container">
            <div class="img-container">
              <img class="pokeimg" src="${data.sprites.front_default}" alt="${pokemones[i].name}">
            </div>
            <div class="info-container">
              <p style="margin-top: 0px;"><strong>Name:</strong> ${pokemones[i].name}</p>
              <p><strong>Type:</strong> ${data.types[0].type.name}</p>
              <p><strong>Height:</strong> ${data.height/10} m</p>
              <p><strong>Weight:</strong> ${data.weight/10} kg</p>
              <p><strong>Experience:</strong> ${data.base_experience}</p>
              <p><strong>Abilities:</strong> ${data.abilities.length}</p>
            </div>
          </div>
        </div>`
        
      })
  }

  cardList.innerHTML = pokeHTML;
}

async function searchPokemon(){
  
  //cardList.innerHTML = loading;
  let value = pokeSearch.value.toLowerCase();
  let bodyHTML = '';

  if(value === ''){
    alert('You must first enter a name');
    return
  }

  cardList.innerHTML = loading;

  await fetch(`https://pokeapi.co/api/v2/pokemon/${value}`)
    .then(res => {
      if(res.ok === false){
        return false;
      }else{
        return(res.json())
      }
    })
    .then((data) => {

      if(data === false){
        cardList.innerHTML = noPoke;
      }else{

        bodyHTML = `
          <div class="pokeCard">
            <img class="bg-card" style="width: 30vw" src="./assets/images/PokeData.png" alt="pokeCard">
            <div class="container">
              <div class="img-container" style="width: 55%">
                <img class="pokeimg" src="${data.sprites.front_default}" alt="${value}">
              </div>
              <div class="info-container" style="width: 45%; margin-left: 50%;">
                <p style="margin-top: 0px; font-size: 1.2vw"><strong>Name:</strong> ${value}</p>
                <p style="font-size: 1.2vw"><strong>Type:</strong> ${data.types[0].type.name}</p>
                <p style="font-size: 1.2vw"><strong>Height:</strong> ${data.height/10} m</p>
                <p style="font-size: 1.2vw"><strong>Weight:</strong> ${data.weight/10} kg</p>
                <p style="font-size: 1.2vw"><strong>Experience:</strong> ${data.base_experience}</p>
                <p style="font-size: 1.2vw"><strong>Abilities:</strong> ${data.abilities.length}</p>
              </div>
            </div>
          </div>`

      }
      
    
    })

  if(bodyHTML != ''){
    cardList.innerHTML = bodyHTML;
  }

}