//Api key 563492ad6f91700001000001737cf5621d2c40009b4864e498ede37f
var currentQuery = 'building';
var currentPage = 1;
var gallery = '';
var totalPages = 0;
let loading = false;
let circularProgress = `
                  <div class="loading">
                  <div class="outer">
                    <div class="inner"></div>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                    <defs>
                      <linearGradient id="GradientColor">
                        <stop offset="0%" stop-color="#333E4E" />
                        <stop offset="100%" stop-color="#05A081" />
                      </linearGradient>
                    </defs>
                    <circle cx="80" cy="80" r="70" stroke-linecap="round" />
                  </svg>
                  </div>`;

const getData = async () => {

  const response = await fetch(`https://api.pexels.com/v1/search?query=${currentQuery}&page=${currentPage}`, {
    method: 'GET',
    headers: {
      Authorization: '563492ad6f91700001000001737cf5621d2c40009b4864e498ede37f'
    }

  });

  const data = await response.json();

  const photos = [];

  if (currentPage === 1) {

    totalPages = parseInt(data.total_results / 15) + 1;

  }

  for (pub of data.photos) {
    photos.push(new Notice(pub.id, pub.photographer, pub.src.medium));
  }

  return photos;

}

const generateBody = () => {
  getData()
    .then(notices => {
      if (notices.length === 0 && currentPage <= totalPages) {
        loading = false;
        document.getElementById('card-list').innerHTML = '<h2>No images found</h2>';
      } else {
        if (currentPage > totalPages) {
          window.removeEventListener('scroll', scrollController);
          window.removeEventListener('touchmove', scrollController);
          gallery += '<h2>No more images</h2>';
        } else {
          for (not of notices) {
            gallery += `
            <div class='pub-card' >
              <h4 class='title' >${not.photographer}</h4>
              <img class='image' src='${not.image}' />
              <div class='actions'>
                <a onclick="
                    event.preventDefault();
                    const i = document.getElementById('heart${not.id}');
                    i.classList.toggle('far');
                    i.classList.toggle('fas');
                "><i id="heart${not.id}" class="far fa-heart fa-lg"></i></a>
                <a onclick="
                  event.preventDefault();
                  fetch('${not.image}')
                    .then(res => res.blob())
                    .then(blob => {
                      const blobURL = window.URL.createObjectURL(blob);
                      const a = document.createElement('a');
                      a.href = blobURL;
                      a.download = 'img_${not.id}';
                      document.body.appendChild(a);
                      a.click();
                      a.remove();
                    });
                "><i class="fas fa-download  fa-large"></i></a>
                <a><i class="far fa-comment-dots  fa-large"></i></a>
              </div>
            </div>
            `;
          }
        }

        loading = false;
        document.getElementById('card-list').innerHTML = gallery;
      }




    });
}

const scrollController = () => {
  let offset = parseInt(document.documentElement.scrollHeight - document.documentElement.scrollTop - innerHeight);
  if (offset === 0 && !loading) {
    loading = true;
    document.getElementById('card-list').innerHTML += circularProgress;
    scroll(0, document.documentElement.scrollHeight);
    currentPage += 1;
    generateBody();
  }
}

const search = (event) => {
  event.preventDefault();
  window.addEventListener('scroll', scrollController);
  window.addEventListener('touchmove', scrollController);
  loading = true;
  let value = document.getElementById('searchInput').value;
  document.getElementById('card-list').innerHTML = circularProgress;
  currentPage = 1;
  currentQuery = value.length ? value : currentQuery;
  gallery = '';
  generateBody();
}


const home = () => {
  gallery = '';
  loading = true;
  currentPage = 1;
  currentQuery = 'building';
  document.getElementById('card-list').innerHTML = circularProgress;
  generateBody();
}

const main = () => {

  window.addEventListener('scroll', scrollController);
  window.addEventListener('touchmove', scrollController);

  document.getElementById('searchBtn').addEventListener('click', search);

  document.getElementById('homeClick').addEventListener('click', home);

  generateBody();

}

main();