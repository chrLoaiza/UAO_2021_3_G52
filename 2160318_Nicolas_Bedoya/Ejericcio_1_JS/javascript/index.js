function dobleClick(event) {
  // alert('I was double clicked, yaaay!!!!!!!!!');
}

function buttonClicked(event) {
  // alert("Normal Function");
}

function formSubmited(event) {
  alert('Clickeado!');
}

function focusElement(event){
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
