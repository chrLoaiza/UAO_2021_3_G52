/**
 * This is the API URL to fetch data
 * https://randomuser.me/api/?results=5
 */

document
  .getElementById("apiButton")
  .addEventListener("click", this.generateUsers.bind(this));

async function generateUsers(){
  const dataPromise = await this.getRandomUsers(); 
  
  const sectionUsers = document.getElementById('users');
  sectionUsers.innerHTML = null;
  const usersArray = dataPromise.results; 

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
    sectionUsers.innerHTML += userElement; 
  }
  
}

async function getRandomUsers(){
  const requestAPI = await fetch('https://randomuser.me/api/?results=5'); 
  return requestAPI.json(); 
}
