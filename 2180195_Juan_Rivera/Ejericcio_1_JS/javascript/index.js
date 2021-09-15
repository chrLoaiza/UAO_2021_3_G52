// const functionBtn = document.getElementById("namedFunction");

// functionBtn.addEventListener("click", this.buttonClicked);

let inputs = document.getElementsByClassName('input');

for(let i = 0; i < inputs.length; i++){
  inputs[i].addEventListener('focus', (event) => {
    event.target.style.border = '2px solid rgb(34, 32, 155)';
  });
}

for(let i = 0; i < inputs.length; i++){
  inputs[i].addEventListener('blur', (event) => {
    event.target.style.border = '1px solid rgb(0, 238, 255)';
  });
}

function dobleClick(event) {
  // alert('I was double clicked, yaaay!!!!!!!!!');
}

function buttonClicked(event) {
  // alert("Normal Function");
}

function formSubmited(event) {
  let element = document.getElementById('form').children
  const loopSize = element.length;
  let mailData = {}
  for (let index = 0; index < loopSize; index++) {
    const element = document.getElementById('form').children[index];
    const inputEle = element.children[1];
    mailData[inputEle.name] = inputEle.value;
  }

  console.log(mailData);
  alert('Datos subidos correctamente :D!!!');
}