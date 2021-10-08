/**
 * This is the API URL to fetch data
 * https://randomuser.me/api/?results=5
 */

const users = document.getElementById("users");

document.getElementById("apiButton").addEventListener("click", async () => {
  let html = ``;

  const response = await fetch("https://randomuser.me/api/?results=5");

  const data = await response.json();

  console.log(data);

  data.results.map((e) => {
    html += `<div class="user-container">
    <div class="user-header">
      <img src="${e.picture.medium}" alt="medium_profile">
      </div>
      <div class="user-body">
      <h3>${e.name.title} ${e.name.first} ${e.name.last}</h3>
      <p>${e.email}</p>
      <p>${e.phone}</p>
      <p>${e.location.street.name} ${e.location.street.number}</p>
      </div>
    </div>`;
  });

  users.innerHTML = html;
});
