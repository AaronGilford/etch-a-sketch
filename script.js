let container = document.querySelector('.container');
let gridSquares = document.getElementsByClassName('gridSquare');

let promptBtn = document.querySelector('#promptBtn');
promptBtn.addEventListener('click', userPrompt);
let blackBtn = document.querySelector('#blackBtn');
blackBtn.addEventListener('click', blackGrid);
let rgbBtn = document.querySelector('#rgbBtn');
rgbBtn.addEventListener('click', rgbGrid)

let boardColor;
let opacity = 0;
blackGrid();

let userInput = 16
createGrid();

for (square of gridSquares) {
    square.addEventListener('mouseover', hover)
}

function userPrompt() {
    userInput = prompt("How many squares wide/high would you like?")
    if (userInput > 100 || userInput < 0) {
        alert("Error, value must be less than 100 and over 0")
    } else {
        removeElementsByClassName("gridSquare");
        removeElementsByClassName("newContainer");
        createGrid();
        for (square of gridSquares) {
            square.addEventListener('mouseover', hover)
        }
    }
}


function createRow() {
    let newContainer = document.createElement('div');
    newContainer.className = "newContainer";
    container.appendChild(newContainer);

    for (let i = 0; i < userInput; i++) {
        let newDiv = document.createElement('div');
        newDiv.className = "gridSquare";
        newContainer.appendChild(newDiv);
    }

}

function createGrid() {
    for (let j = 0; j < userInput; j++) {
        createRow();
    }
}

function removeElementsByClassName(className) {
    const elements = document.getElementsByClassName(className);
    while(elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
    }
}

function hover(e) {
        e.target.style.backgroundColor = `${boardColor}`;
        if (boardColor !== 'black') {
            rgbGrid();
        } else {
            opacityBlack();
            blackGrid();
            e.target.style.opacity = `${opacity}`;
            
        }
}

function blackGrid() {
    boardColor = `black`;
}

function rgbGrid() {
    boardColor = `rgb(${rgbRandom()}, ${rgbRandom()}, ${rgbRandom()})`;
}

function rgbRandom () {
    for (square of gridSquares) {
        return Math.floor(Math.random() * 255);
    }
}

gridSquare.addEventListener('mouseover', blackGrid);

function opacityBlack (e) {
    if (boardColor !== 'black' || opacity > 1) {
        opacity = 1;
    } else {
        uniqueId();
        let targetId = e.target.id;
        let gridSquare = document.getElementById('targetId')
        opacity = window.getComputedStyle(gridSquare).getPropertyValue("opacity");
        console.log(opacity);
        opacity = opacity + 0.1;
    }
}

let unique = 100;

function uniqueId(e) {
    if (typeof gridSquares.id != 'undefined') {
        e.target.id = unique;
        unique++;
    } else {}
}