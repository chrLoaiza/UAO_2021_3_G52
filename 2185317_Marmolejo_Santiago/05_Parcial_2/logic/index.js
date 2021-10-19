const request_btn = document.getElementById("request-btn");

request_btn.addEventListener("click", async () => {
  const cardList = document.getElementById("card-list");
  let data = await fetchData();

  let html = "";

  data.message.forEach((element) => {
    html += `<img src="${element}" class = "image"/>`;
  });

  cardList.innerHTML = html;
});

const fetchData = async () => {
  const response = await fetch("https://dog.ceo/api/breeds/image/random/10");

  return await response.json();
};
