const request_btn = document.getElementById("request-btn");
request_btn.addEventListener("click", this.generateAnimeQuotes.bind(this));

async function generateAnimeQuotes(){
  const dataPromise = await this.getAnimeQuotes();

  const cardList = document.getElementById("card-list");
  cardList.innerHTML = null;

  const animeQuotesArray = dataPromise;

  debugger

  for(let i = 0; i < 3; i++)
  {
    const userData = animeQuotesArray[i];
    const userElement = `
    <div class="anime-card-container">
      <div class="anime-card-body">
        
        <p><strong>Anime: </strong> ${userData.anime}</h3><svg class="x-mark" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="white" d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg></p>
        <p><strong>Character: </strong> ${userData.character}</p>
        <p><strong>Quote: </strong>${userData.quote}</p>
      </div>
    </div>
    `;
    cardList.innerHTML += userElement;
  }
}

async function getAnimeQuotes(){
  const requestAPI = await fetch('https://animechan.vercel.app/api/quotes');
  return requestAPI.json();
}
