let body = document.querySelector('body');

let button = document.querySelector('#button');
button.addEventListener('click', changeBgColor);

let h1 = document.querySelector('h1');

let bodyColors = ["#013A20", "#31352E", "#FD7F20", "#3B0918", "#FC2E20"];
let h1Colors = ["#dadbca", "#EBEBE8", "#e0d838", "#e0cabc"];

function changeBgColor(){
    let  bodyColorsIndex= parseInt(Math.random()*bodyColors.length);
    body.style.backgroundColor = bodyColors[bodyColorsIndex];

    let h1ColorsIndex = parseInt(Math.random()*h1Colors.length);
    h1.style.color = h1Colors[h1ColorsIndex];
}