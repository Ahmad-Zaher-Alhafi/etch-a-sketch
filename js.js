const container = document.querySelector(".container");
const body = document.querySelector("body");
let divs = [];

let button = document.createElement("button");
button.textContent = "Set squares number";
body.insertBefore(button, container);

button.onclick = () => {
    let numOfSquares = prompt("Enter num of squares, max of 100");
    numOfSquares = numOfSquares > 100 ? 100 : numOfSquares;

    clearGrid();
    createButtons(numOfSquares);
    listenToDivsMouseEnter();
}

function createButtons(numOfSquares) {
    for (let row = 0; row < numOfSquares; row++) {
        let div = document.createElement("div");
        div.style.width = "16px";
        div.style.height = "16px";
        div.style.backgroundColor = getRandomRGBColor();
        div.style.opacity = 0.1;
        container.appendChild(div);

        divs.push(div);
    }
}

function listenToDivsMouseEnter() {
    divs.forEach(div => {
        div.onmouseenter = () => {
            let op = parseFloat(window.getComputedStyle(div).opacity);
            div.style.opacity = op + .1;
        }
    });
}

function clearGrid() {
   container.replaceChildren();
}

function getRandomRGBColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}