//Global Variables
const grid = document.getElementById(`grid-container`);
const widthGrid = grid.offsetWidth;
const heightGrid = grid.offsetHeight;
let size = 16;
let outline = true;
let mouseDown = false;
let eraser = false;
let color = ``;

//Function to create rows. 
function createGridRow (size) {
  for ( r = 0; r < size; r++ ) {
    let row = document.createElement(`div`);
    grid.appendChild(row).className = `gridRow`;
  };
};

//Function to create columns.
function createGridColumns (size) {
    let rows = document.getElementsByClassName(`gridRow`);
    for ( i = 0; i < rows.length; i++ ) {
        for ( c = 0; c < size; c++ ) {
            let newCol = document.createElement(`div`);
            rows[c].appendChild(newCol).className = `gridCol`;
        };
    };
};

//Function to create grid. 
function createGrid (size) {
    createGridRow(size);
    createGridColumns(size);
}

//Resize cols and rows function
function resize (size) {
    let rows = document.getElementsByClassName(`gridRow`);
    let cells = document.getElementsByClassName(`gridCol`);
    let cellSizeNum = Math.floor(widthGrid / size);
    let cellSizeString = cellSizeNum.toString() + `px`;

    for (i = 0; i < rows.length; i++) {
        rows[i].style.width = cellSizeString;
    };

    for (i = 0; i < cells.length; i++) {
        cells[i].style.height = cellSizeString;
        cells[i].style.width = cellSizeString;
    };
};

//Clear Grid - add the other classes once created. 
function clearGrid () {
    document.querySelectorAll('.gridCol').forEach((item) => {
        item.style.backgroundColor = `#FFF`;
       });
};

//Reset Grid
function resetGrid () {
    while (grid.lastElementChild) {
        grid.removeChild(grid.lastElementChild);
    };
};

//Remove outline on grid 
function removeOutline (outline) {
    document.querySelectorAll('.gridCol').forEach((item) => {
        if (outline === true) {
            item.style.outline = `none`;
        } 
        if (outline === false) {
            item.style.outline = `grey 1px solid`;
        }
       });
}

//Add Eventlisteners to all Cells for mouseleave event.
function cellEventListener (color) {
    if(color === "" || color === undefined) {
        color = `black`;
    }
    document.addEventListener(`mousemove`, function(e) {
        if(mouseDown) {
            if (e.target.className === `gridCol`) {
                e.target.style.backgroundColor = color;
            }
        }
    });
};


//Button eventlisteners 
function buttonEventListeners () {
    const buttons = document.querySelectorAll(`.button`);
    buttons.forEach((button) => {

        if(button.id === `btn-grid`) {
            button.addEventListener(`click`, event =>{
                size = prompt(`Enter the size of the grid! (max 100)`);
                let reg = /^\d+$/;
                if (size === null || size === `` || !reg.test(size) || size > 100 || size <= 0) {
                        size = 16;
                        resetGrid();
                        createGrid(size);
                        resize(size);
                        cellEventListener();
                    }else {
                        resetGrid();
                        createGrid(size);
                        resize(size);
                        cellEventListener();
                };
            });
        };
     if (button.id === `btn-clear`) {
        button.addEventListener(`click`, event => {
            clearGrid();
        });
     }
     if (button.id === `btn-outline-clear`) {
        button.addEventListener(`click`, event => {
            removeOutline(outline);
            if (outline === true) {
                outline = false;
            } else if (outline === false) {
                outline = true;
            }
            return outline;
        });
     }

     if (button.id === `btn-eraser`) {
        button.addEventListener(`click`, event => {
        if(eraser === false) {  
            color = `#fff`;
            eraser = true;
            document.getElementById(`eraser-mode`).innerHTML = "ON!"
        } else if (eraser === true) {
            eraser = false;
            color = `black`
            document.getElementById(`eraser-mode`).innerHTML = "OFF!"
        }
        cellEventListener(color);
        });
     }
    
    });
};


createGrid(size);
resize(size);
cellEventListener(color);
buttonEventListeners();


window.addEventListener(`mousedown`, () => {
    mouseDown = true;
});

window.addEventListener(`mouseup`, () => {
    mouseDown = false;
});


