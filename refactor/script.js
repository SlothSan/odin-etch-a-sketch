//Variables 
const container = document.getElementById(`grid-container`);

//Generate grid based on input number. 
function generateGrid(x) {
    for (let i = 0; i < x; i++) {
        let gridRow = document.createElement(`div`);
        gridRow.classList.add(`grid-row`);
        for (let j = 0; j < x; j++) {
            let gridSquare = document.createElement(`div`);
            gridSquare.classList.add(`grid-square`);
            gridRow.appendChild(gridSquare);
        }
        container.appendChild(gridRow);
    }

    let nodeList = document.querySelectorAll(`.grid-square`);
    for (let i = 0, nodeLength = nodeList.length; i < nodeLength; i++ ) {
        nodeList[i].setAttribute("counter", 0);
    }
}

//colorChange on mouseover
function colorChangeEventListener(color) {
    let nodeList = document.querySelectorAll(".grid-square");
    for (let i = 0, nodeLength = nodeList.length; i < nodeLength; i++) {
        nodeList[i].setAttribute("counter", 0);
        nodeList[i].addEventListener(
            `mouseover`, function(e) {
                if(e.buttons == 1) {
                    this.style.backgroundColor = color;
                }
            });
    }

    document.getElementById("color-picker").value = color;
}

console.log(container);

//Set Intial Grid
generateGrid(16);

//Set Initial Color
colorChangeEventListener("rgb(0,0,0");