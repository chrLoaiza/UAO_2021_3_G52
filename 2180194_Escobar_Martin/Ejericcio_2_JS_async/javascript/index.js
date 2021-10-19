/**
 * This is the API URL to fetch data
 * https://randomuser.me/api/?results=5
 */

document
  .getElementById("apiButton")
  .addEventListener("click", this.generateUsers.bind(this));

function generateUsers() {
  document.getElementById("chargingSplash").style.display = 'flex';
  this.requestUsers()
    .then(data => {
      this.requestCoverImage()
        .then(imgArray => {
          document.getElementById("chargingSplash").style.display = 'none';
          const users = data.results;
          const usersSection = document.getElementById('users');
          let usersHTML = '';
          for (let i = 0; i < users.length; i++) {
            const user = users[i];
            const imageCover = imgArray[i];
            const userCard = `
            <div class="user-container">
            <div class="user-header">
              <img class="cover"
                src="${imageCover}"
                alt="cover_profile">
              <img class="profile" src="${user.picture.large}" alt="medium_profile">
            </div>
            <div class="user-body">
              <h3>${user.name.title} ${user.name.first} ${user.name.last}</h3>
              <p>${user.email}</p>
              <p>${user.phone}</p>
              <p>${user.location.city}, ${user.location.state} (${user.location.country})</p>
              </div>
            </div>
          `;

            usersHTML += userCard;
          }

          usersSection.innerHTML = null;
          usersSection.innerHTML = usersHTML;
        });

    });

}

async function requestUsers() {
  const response = await fetch('https://randomuser.me/api/?results=10');
  const resJson = await response.json();

  return resJson;
}

async function requestCoverImage() {
  let coverPhotos = [];
  for (let i = 0; i < 10; i++) {
    const response = await fetch('https://picsum.photos/500/300');
    coverPhotos.push(response.url);
  }
  return coverPhotos;
}