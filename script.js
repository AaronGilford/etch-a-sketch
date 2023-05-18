let container = document.querySelector('.container');
let gridSquares = document.getElementsByClassName('gridSquare');

let button = document.querySelector('button');
button.addEventListener('click', userPrompt);

let userInput = 16
createGrid();

function userPrompt() {
    userInput = prompt("How many squares wide/high would you like?")
    if (userInput > 100 || userInput < 0) {
        alert("Error, value must be less than 100 and over 0")
    } else {
        removeElementsByClassName("gridSquare");
        removeElementsByClassName("newContainer");
        console.log(gridSquares);
        createGrid();
        for (square of gridSquares) {
            square.addEventListener('mouseover', hover)
        }
        
    }
}

function removeElementsByClassName(className) {
    const elements = document.getElementsByClassName(className);
    while(elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
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
function hover(e) {
    e.target.style.backgroundColor = "grey";    
}

for (square of gridSquares) {
    square.addEventListener('mouseover', hover)
}

