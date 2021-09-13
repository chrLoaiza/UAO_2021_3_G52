window.onload = () => {

  let inputs = [];

  inputs = document.getElementsByClassName('input');

  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].type != 'button') {
      inputs[i].addEventListener('focus', (evt) => {
        inputs[i].classList.toggle('inputBorders');
        console.log(`${inputs[i].id} focus`);
      });
      inputs[i].addEventListener('blur', (evt) => {
        inputs[i].classList.toggle('inputBorders');
        console.log(`${inputs[i].id} blur`);
      });
    } else {
      inputs[i].addEventListener('click', (evt) => {
        for (let i = 0; i < inputs.length; i++) {
          if (inputs[i].type != 'button') {
            inputs[i].value = '';
          }
        }
        alert('Formulario enviado con èxito');
      });
    }
  }

};

// const functionBtn = document.getElementById("namedFunction");

// functionBtn.addEventListener("click", this.buttonClicked);

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
  //alert('Listo para enviar');
}


