const request_btn = document.getElementById("request-btn");
request_btn.addEventListener("click", this.generateAnime.bind(this));

function generateAnime() {
  const animeAll = this.document.getElementById("anime");
  animeAll.innerHTML = "";
  this.fetchAnimeData().then((data) => {
    const anime = data;
    for (let index = 0; index < anime.length; index++) {
      const element = anime[index];
      const animeElement = `
  <div class="card-container">
  <div class="card-body">
  <div class="card-header">
  
  <img
    id="chica"
    src="https://github.com/rocktimsaikia/anime-chan/blob/main/images/animechan_logo.png?raw=true"
  />
  <h3>${element.anime}</h3>
  </div>
 
  <p><b>Character: </b> ${element.character}</p>
  <p><b>Quote: </b> ${element.quote}</p>
  </div>
  </div>`;
      animeAll.innerHTML += animeElement;
    }
  });
}

async function fetchAnimeData() {
  const response = await fetch("https://animechan.vercel.app/api/quotes?");
  return response.json();
}
