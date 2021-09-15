// const functionBtn = document.getElementById("namedFunction");

// functionBtn.addEventListener("click", this.buttonClicked);

// function dobleClick(event) {
//   // alert('I was double clicked, yaaay!!!!!!!!!');
// }

// function buttonClicked(event) {
//   // alert("Normal Function");
// }

// function formSubmited(event) {
//   let element = document.getElementById('form').children
//   const loopSize = element.length - 1;
//   let object = {}
//   for (let index = 0; index < loopSize; index++) {
//     const element = document.getElementById('form').children[index];
//     const key = element.children[0].name
//     console.log(`${element.children[0].name}: ${element.children[0].value}`)
//   }
// }

// const anonymousClick = document.getElementById("anonymous");
// anonymousClick.addEventListener("click", function (event) {
//   // alert("Anonymous function");
// });

// const arrowClick = document.getElementById("arrow");
// arrowClick.addEventListener("click", (event) => {
//   // alert("Arrow function");
// });

// const inputElement = document.getElementById("inputName");
// inputElement.addEventListener("focus", (event) => {
//   console.log(`El id del elemento es ${event.target.id}`);
// });

// inputElement.addEventListener('input', (event) => {
//   const mayuscula = event.target.value.toUpperCase();
//   event.target.value = mayuscula;
// })

// inputElement.addEventListener('blur', (event) => {
//   // alert ('Ya no tengo foco');
// })

/**
 * Teniendo objeto a la mano
 */

// const heroes = {
//   "squadName" : "Super Hero Squad",
//   "homeTown" : "Metro City",
//   "formed" : 2016,
//   "secretBase" : "Super tower",
//   "active" : true,
//   "members" : [
//     {
//       "name" : "Molecule Man",
//       "age" : 29,
//       "secretIdentity" : "Dan Jukes",
//       "powers" : [
//         "Radiation resistance",
//         "Turning tiny",
//         "Radiation blast"
//       ]
//     },
//     {
//       "name" : "Madame Uppercut",
//       "age" : 39,
//       "secretIdentity" : "Jane Wilson",
//       "powers" : [
//         "Million tonne punch",
//         "Damage resistance",
//         "Superhuman reflexes"
//       ]
//     },
//     {
//       "name" : "Eternal Flame",
//       "age" : 1000000,
//       "secretIdentity" : "Unknown",
//       "powers" : [
//         "Immortality",
//         "Heat Immunity",
//         "Inferno",
//         "Teleportation",
//         "Interdimensional travel"
//       ]
//     }
//   ]
// }

// document.getElementById('membersName').innerHTML = heroes['squadName'];
// const members = heroes.members;
// //debugger

// for (let index = 0; index < members.length; index++) {
//   const element = members[index];
//   // const eleHeroe = document.createElement('p');

//   // eleHeroe.innerHTML = element.name;
//   // document.getElementById('heroes').appendChild(eleHeroe);
//   const heroe = `
//   <div>
//     <p class="title">Name</p>
//     <p class="value"> ${element.name}</p>
//     <p class="title">Secret Identity</p>
//     <p class="value"> ${element.secretIdentity}</p>
//   <div>
//   `;
//   document.getElementById('members').innerHTML += heroe;
// }

console.log(1)
/**
 * Promises
 */
fetch("https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json")
  .then((response) => {
    console.log(2)
    return response.json();
  })
  .then((parseObj) => {
    document.getElementById("membersName").innerHTML = parseObj["squadName"];
    const members = parseObj.members;
    
    console.log(3)
    for (let index = 0; index < members.length; index++) {
      const element = members[index];
      const heroe = `
        <div>
          <p class="title">Name</p>
          <p class="value"> ${element.name}</p>
          <p class="title">Secret Identity</p>
          <p class="value"> ${element.secretIdentity}</p>
        <div>
        `;
      document.getElementById("members").innerHTML += heroe;
    }
  });
  console.log(4)

/**
 * ASYNC/AWAIT
 */
// document.onload = (async function () {
//   const request = await fetch(
//     "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json"
//   );
//   const parseObj = await request.json();
//   document.getElementById("membersName").innerHTML = parseObj["squadName"];
//   const members = parseObj.members;

//   for (let index = 0; index < members.length; index++) {
//     const element = members[index];
//     const heroe = `
//         <div>
//           <p class="title">Name</p>
//           <p class="value"> ${element.name}</p>
//           <p class="title">Secret Identity</p>
//           <p class="value"> ${element.secretIdentity}</p>
//         <div>
//         `;
//     document.getElementById("members").innerHTML += heroe;
//   }
// })();
