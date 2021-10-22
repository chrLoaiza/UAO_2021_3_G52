const request_btn = document.getElementById("request-btn");
request_btn.addEventListener("click", async () => {
  const cardList = document.getElementById("card-list");
  cardList.innerHTML = null;
  const dataPromise = this.getData();
  dataPromise.then((dataAPI) => {
    var userArr = [];
    userArr = dataAPI;

    for (let index = 0; index < userArr.length; index++) {
      debugger;
      const userData = userArr[index];
      const userEl = `      <div class="user-container">
      <div class="user-header">
        <img src=${userData.logo}  alt="medium_profile">
      </div>
      <div class="user-body">
      <h3>${userData.name}</h3>

      <p >${userData.description}</p>
      <p class="foodType">Type: ${userData.type} food.</p>
      <p class="phone">Phone number :${userData.phone_number} </p>
        <div class="dias">
        <p>Monday    ${userData.hours.monday.opens_at}-${userData.hours.monday.closes_at}
   
        <p>Tuesday    ${userData.hours.tuesday.opens_at}-${userData.hours.tuesday.closes_at}
       
        <p>Wednesday   ${userData.hours.wednesday.opens_at}-${userData.hours.wednesday.closes_at}
    
        <p>Thursday     ${userData.hours.thursday.opens_at}-${userData.hours.thursday.closes_at}
     
        <p>Friday    ${userData.hours.friday.opens_at}-${userData.hours.friday.closes_at}
   
        <p>Saturday     ${userData.hours.saturday.opens_at}-${userData.hours.saturday.closes_at}
 
        <p>Sunday   ${userData.hours.sunday.opens_at}-${userData.hours.sunday.closes_at}
       </div>
      </div>
    </div>`;
      cardList.innerHTML += userEl;

      debugger
    }



  })

});
async function getData() {
  const response = await fetch('https://random-data-api.com/api/restaurant/random_restaurant?size=10');
  const data = await response.json();
  return data
}

