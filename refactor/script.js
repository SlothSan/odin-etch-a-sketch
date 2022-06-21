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

//Random Color Change on mouseover
function randomColors() {
    let nodeList = document.querySelectorAll(`.grid-square`);
    for (let i = 0, nodeLength = nodeList.length; i < nodeLength; i++) {
        let x = Math.floor(Math.random() * Math.floor(256));
        let y = Math.floor(Math.random() * Math.floor(256));
        let z = Math.floor(Math.random() * Math.floor(256));
        nodeList[i].setAttribute("counter", 0);
        nodeList[i].addEventListener( 
            "mouseover", function(e) {
                if(e.buttons == 1) {
                    this.style.backgroundColor = `rgb(${x}, ${y}, ${z})`;
                }
            });
    }
}

//Function Pencil Shader 
function pencilShader() {
    let nodeList = document.querySelectorAll(`.grid-square`);
    for (let i = 0, nodeLength = nodeList.length; i < nodeLength; i++) {
        nodeList[i].addEventListener (
            "mouseover", function(e) {
                if (e.buttons == 1) {
                    let countValue = parseFloat(this.getAttribute("counter"));
                    if (countValue == 0) {
                        this.style.backgroundColor = `rgb(00, 00, 00, 0.1)`;
                        let newCount = parseFloat(countValue) + 0.1;
                        this.setAttribute("counter", newCount);
                    }
                    else if (countValue < 1) {
                        this.style.backgroundColor = `rgb(00, 00, 00, ${parseFloat(countValue)})`;
                        let newCount = parseFloat(countValue) + 0.1;
                        this.setAttribute("counter", newCount);
                    }
                    else {
                        this.style.backgroundColor = `rgb(00, 00, 00, 1)`;
                    }
                }
            });
    }
}

//Function Clear Grid
function clearGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    let slideValue = document.getElementById(`grid-slider`).value;
    generateGrid(slideValue);
    let colorValue = document.getElementById(`color-picker`).value;
    if (colorValue != `rgb(00, 00, 00)`) {
        colorChangeEventListener(colorValue);
    }
    else {
        colorChangeEventListener(`rgb(00, 00, 00)`);
        document.getElementById(`color-picker`).value = `rgb(00, 00, 00)`;
    }
}

//Set Intial Grid
generateGrid(16);

//Set Initial Color
colorChangeEventListener("rgb(00, 00, 00");