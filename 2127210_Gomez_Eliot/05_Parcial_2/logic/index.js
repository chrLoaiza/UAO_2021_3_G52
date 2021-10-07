async function getDogs(){
  const requestAPI = await fetch('https://dog.ceo/api/breeds/image/random/10'); 
  return requestAPI.json(); 
}

const request_btn = document.getElementById("request-btn");
request_btn.addEventListener("click", async () => {
  const cardList = document.getElementById("card-list");
  const response = await this.getDogs();
  const dogsArray = response.message;
  console.log(dogsArray[0]);

  let numero = 1;
  for (let i = 0; i < dogsArray.length; i++) {
    
    const dogData = dogsArray[i];
    const userElement = `
    <div class="dog-container">
        <div class="dog-header">
          <h3> Perrito kawai ${numero}</h3>
          <img src= ${dogData} alt="dog_profile">
        </div>  
    </div>
    `;
    cardList.innerHTML += userElement;
    numero++;    
  }
});
