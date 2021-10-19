//creacion de la funcion
const request_btn = document.getElementById("request-btn");
//const restr =0;
request_btn.addEventListener("click",this.genereRestaurante.bind(this))

async function genereRestaurante(){
  console.log("entre!");
  let restauranteJS = "";
  let imagenes = [];
  const cardList = document.getElementById("card-list")
  //realizar petición web
  const response = await fetch("https://random-data-api.com/api/restaurant/random_restaurant?size=10");
  const data = await response.json();
  //console.log(data[cont]); 
    for(let cont = 0; cont < data.length; cont ++){
      const img = await fetch("https://loremflickr.com/500/500/restaurant");
      imagenes[cont] = img.url;
    }

    for (let cont = 0; cont < data.length; cont++){
      //const restData = restr[cont];
      restauranteJS += `
        <div class="Restaurant-container">
          <div class="Restaurant-header">
            <img src = "${imagenes[cont]}" alt = "logoRestaurante"/>
          </div>
          <div class="Restaurant-info">
            <h3>${data[cont].name}</h3>
            <p><strong> Type: </strong> ${data[cont].type}</p>
            <p><strong> Teléfono: </strong> ${data[cont].phone_number}</p>
            <p><strong> Dirección: </strong> ${data[cont].address}</p>
          </div>
        </div>`
    } 
    window.addEventListener("request-btn", function(genereRestaurante){
      document.getElementById("loader").classList.toggle("load");
    })
    cardList.innerHTML = restauranteJS;
}

