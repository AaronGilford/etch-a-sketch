let container = document.querySelector('.container');
let gridSquares = document.getElementsByClassName('gridSquare');

let button = document.querySelector('button');
button.addEventListener('click', userPrompt);

let userInput = 0

function userPrompt() {
    userInput = prompt("How many squares wide/high would you like?")
    if (userInput > 100 || userInput < 0) {
        alert("Error, value must be less than 100 and over 0")
        userInput = 0
    }
}


function createRow() {
    let newContainer = document.createElement('div');
    newContainer.className = "newContainer";
    container.appendChild(newContainer);

    for (let i = 1; i < (userInput + 1); i++) {
        let newDiv = document.createElement('div');
        newDiv.className = "gridSquare";
        newContainer.appendChild(newDiv);
    }
    

}

for (let j = 1; j < (userInput + 1); j++) {
    createRow();
}

function hover(e) {
    e.target.style.backgroundColor = "grey";    
}

for (square of gridSquares) {
    square.addEventListener('mouseover', hover)
}


