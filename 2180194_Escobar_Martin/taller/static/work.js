$(document).ready(() => {

    let el = [];

    el = document.getElementsByClassName('tilt');

    for (let i = 0; i < el.length; i++) {

        el[i].addEventListener('mousemove', (e) => { handleMove(e, el[i]) });

        el[i].addEventListener('mouseout', function () {
            el[i].style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)'
        });

        el[i].addEventListener('mousedown', function () {
            el[i].style.transform = 'perspective(500px) scale(0.9) rotateX(0) rotateY(0)'
        });

        el[i].addEventListener('mouseup', function () {
            el[i].style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)'
        });

    }

});

function handleMove(e, el) {

    const height = el.clientHeight
    const width = el.clientWidth

    const xVal = e.layerX
    const yVal = e.layerY

    const yRotation = 20 * ((xVal - width / 2) / width)
    const xRotation = -20 * ((yVal - height / 2) / height)

    const string = 'perspective(500px) scale(1) rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg)'

    el.style.transform = string

}

function home() {
    console.log(window.scrollY);
    window.scrollTo(0, 0);
}

function about() {
    window.scrollTo(0, 480);
}

function services() {
    window.scrollTo(0, 1000);
}

function contact() {
    window.scrollTo(0, 480);
}