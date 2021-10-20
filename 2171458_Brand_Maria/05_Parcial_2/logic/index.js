const request_btn = document.getElementById("request-btn");
request_btn.addEventListener("click", async () => {
  const cardList = document.getElementById("card-list");
  var bark = await this.getDoggos();
  var dogArray = [];

  dogArray = bark.message;

  for (var i = 0; i < 6; i++) {
    var dogImage = dogArray[i];
    const userElement = `
    <div class="dog-card">
        <img class="dog-photo" src= ${dogImage}>
          <div class="dog-description">
            <h1>Perrito bonito</h1>
            <h4><b>Está lleno de amor</b></h4>
            <p>Mucho amor</p>
          </div>
    </div>
    `;

    cardList.innerHTML += userElement;
  }
});

//https://dog.ceo/dog-api/documentation/random
//Using Await/Async
async function getDoggos() {
  const response = await fetch("https://dog.ceo/api/breeds/image/random/6");
  const data = await response.json();
  return data;
}
