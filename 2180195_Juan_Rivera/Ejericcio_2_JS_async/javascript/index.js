/**
 * This is the API URL to fetch data
 * https://randomuser.me/api/?results=5
 */

document
  .getElementById("apiButton")
  .addEventListener("click", this.generateUsers.bind(this));

async function generateUsers(){

  const usersHtml = document.getElementById('users');

  let skeletonLoader;

  for(let i = 0; i < 3; i++){
    skeletonLoader += `<div class="skeContainer">
      <div class="user-body bodySke">
        <div class="name nameSke skeleton"></div>
        <div class="info1Ske skeleton"></div>
        <div class="info2Ske skeleton"></div>
        <div class="info3Ske skeleton"></div>
      </div>
    </div>`
  }

  usersHtml.innerHTML = skeletonLoader;

  const fetchUsers = await fetch('https://randomuser.me/api/?results=12');
  const usersJSON = await fetchUsers.json();
  const users = usersJSON.results;
  let usersToShow = '';
  
  for(let i = 0; i < users.length; i++){

    usersToShow += `<div class="user-container">
      <div class="user-header">
        <img class="image" src=${users[i].picture.large} alt="medium_profile">
      </div>
      <div class="user-body">
        <h3 class="name">${users[i].name.title}. ${users[i].name.first} ${users[i].name.last}</h3>
        <p class="info">${users[i].email}</p>
        <p class="info">${users[i].phone}</p>
        <p class="info">${users[i].location.city}, ${users[i].location.state} (${users[i].location.country})</p>
      </div>
    </div>`
  }

  usersHtml.innerHTML = usersToShow;

}
