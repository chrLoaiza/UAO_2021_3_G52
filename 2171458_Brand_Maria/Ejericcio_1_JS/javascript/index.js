// const functionBtn = document.getElementById("namedFunction");

// functionBtn.addEventListener("click", this.buttonClicked);

// function dobleClick(event) {
//   // alert('I was double clicked, yaaay!!!!!!!!!');
// }

// function buttonClicked(event) {
//   // alert("Normal Function");
// }

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
  alert('Ya no hay salida');
}

function focusElement(event) {
  const element = event.srcElement;
  if(element.id == 'inputName'){
    element.classList.toggle('focusName',true);
  }else if(element.id == 'inputMail'){
    element.classList.toggle('focusMail',true);
  }else if(element.id == 'textArea'){
    element.classList.toggle('focusArea',true);
  }
}

function blurElement(event){
  const element = event.srcElement;
  element.classList.toggle('focusName',false);
  element.classList.toggle('focusMail',false);
  element.classList.toggle('focusArea',false);
} 