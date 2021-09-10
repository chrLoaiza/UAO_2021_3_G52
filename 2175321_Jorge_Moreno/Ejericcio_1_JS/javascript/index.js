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
function focusElement(event) {
  const element = event.srcElement;
  element.classList.toggle('focus', true);



}
// leer evento click
function blurElement(event) {
console.log('salio del foco');
}