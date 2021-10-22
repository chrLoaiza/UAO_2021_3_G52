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
  imprimir();
  //alert('Listo para enviar');
}
function focusElement(event) {
  console.log('entro al foco');
  const element = event.srcElement;
  debugger
  element.classList.toggle('focus', true);




}
// leer evento click
function blurElement(event) {
  const element = event.srcElement;
  element.classList.toggle('focus', false);
  debugger
  console.log('salio del foco');
}

function imprimir() {
  var name = document.getElementById('inputName').value;
  var email = document.getElementById('inputMail').value;
  var reason = document.getElementById('textArea').value;


  alert(`Hi! ${name}    your email is ${email} and you say that ${reason} `);



  name = "";
  email = "";
  reason = "";

}

