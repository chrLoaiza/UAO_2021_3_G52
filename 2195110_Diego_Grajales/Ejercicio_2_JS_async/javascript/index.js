/**
 * This is the API URL to fetch data
 * https://randomuser.me/api/?results=5
 */

document
  .getElementById("apiButton")
  .addEventListener("click", this.generateUsers.bind(this));

async function generateUsers(){
  const dataPromise = await this.getRandomUsers(); //Calls the getRandomUsers function on THIS index.js and it saves the data on this variable.
  //Waits until dataPromise has been solved and then executes the code from below
  
  const sectionUsers = document.getElementById('users');
  sectionUsers.innerHTML = null;
  const usersArray = dataPromise.results; //We save the results of dataPromise into an array 

  for (let i = 0; i < usersArray.length; i++) {
    const userData = usersArray[i];
    const userElement = `
    <div class="user-container">
        <div class="user-header">
          <img src= ${userData.picture.large} alt="medium_profile">
        </div>
        <div class="user-body">
          <h3>${userData.name.title} ${userData.name.first} ${userData.name.last}</h3>
          <p>${userData.email}</p>
          <p>${userData.phone}</p>
          <p>${userData.location.city},${userData.location.state} (${userData.location.country})</p>
        </div>
      </div>
    `;
    sectionUsers.innerHTML += userElement; //We add the userElement into the sectionUsers element
  }
  
}

async function getRandomUsers(){
  const requestAPI = await fetch('https://randomuser.me/api/?results=5'); //Wait until this promise has been solved (we get the response of it)
  return requestAPI.json(); //Once we get the response of the fetch we parse the data into a json
}
