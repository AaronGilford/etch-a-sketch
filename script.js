let container = document.querySelector('.container');

function createRow() {
    let newContainer = document.createElement('div');
    newContainer.className = "newContainer";
    container.appendChild(newContainer);
    for (let i = 1; i < 17; i++) {
        let newDiv = document.createElement('div');
        newDiv.className = "gridSquare";
        newContainer.appendChild(newDiv);
    }
    

}

for (let j = 1; j < 17; j++) {
    createRow();
}