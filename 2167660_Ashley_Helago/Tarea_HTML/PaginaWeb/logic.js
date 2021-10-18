//Aviso emergente
function fSubmited(event) {
    alert('¡¡¡ Se ha registrado un nuevo visitante !!!')
}

//logic input
function focusElement(event) {
    const element = event.srcElement;
    element.classList.toggle('FocElemt', true);
}

//Blur "output"
function blurElement(event) {
    const element = event.srcElement;
    element.classList.toggle('FocElemt', false);
    event.srcElement.value = event.srcElement.value.toUpperCase()
}