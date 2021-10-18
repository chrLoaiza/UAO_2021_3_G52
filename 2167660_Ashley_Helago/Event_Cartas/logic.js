const request_btn = document.getElementById("btn");
request_btn.addEventListener("click", this.genereMuneco.bind(this))

async function genereMuneco() {
  console.log("entre!");
  let AnimeJS = "";
  const animeList = document.getElementById("anime-list")
  //realizar petición web
  const response = await fetch("https://animechan.vercel.app/api/quotes");
  const data = await response.json();
  for (let cont = 0; cont < data.length; cont++) {
    AnimeJS += `
    <div class="AnimeList"> 
          <div class="Container_Information">
            <h3><strong>${data[cont].anime}</strong></h3>
            <p><strong> Character: </strong> ${data[cont].character}</p>
            <p><strong> Quote: </strong> ${data[cont].quote}</p>
          </div>
    </div>`
  }
  animeList.innerHTML = AnimeJS;
}

//    window.addEventListener("request-btn", function (genereMuneco) {
//    document.getElementById("loader").classList.toggle("load");
//})