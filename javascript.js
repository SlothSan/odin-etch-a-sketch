//Global Variables
const CONTAINER = document.getElementById(`grid-container`);
const grid = document.getElementById(`grid-container`);
let rows = document.getElementsByClassName(`gridRow`);
let cells = document.getElementsByClassName(`gridCol`);
let size = 16;
// use this shit to dynamically resize the cols / rows on the grid like a boss ! 
const widthGrid = grid.offsetWidth;
const heightGrid = grid.offsetHeight;
let cellSizeNum = Math.floor(widthGrid / size);
let rowHeightNum = Math.floor(heightGrid / size);

let cellSizeString = cellSizeNum.toString() + `px`;
let rowHeightString = rowHeightNum.toString() + `px`; 
//Remove after testing.
console.log(cellSizeString);
console.log(typeof(cellSizeString));
console.log(cells);


//Refactor createGrid.
function createGrid (size) {
    createGridRow(size);
    createGridColumns(size);
}

function createGridRow (size) {
    for (r = 0; r < size; r++) {
        let row = document.createElement(`div`);
        grid.appendChild(row).className = `gridRow`;
    };
};


function createGridColumns (size) {
    for (i = 0; i < rows.length; i++) {
        for (c = 0; c < size; c++) {
            let newCol = document.createElement(`div`);
            rows[c].appendChild(newCol).className = "gridCol";
        }
    }
}


//Function resize the columns and rows - not working come back to this. 
// THIS WORKS INIT BLUD ! need to redo it to use the sizes created in the variables up top. 
function resize (rows, cells) {
    for (i = 0; i < rows.length; i++) {
        rows[i].style.height = rowHeightString;
    }

    console.log(cells);
    for (i = 0; i < cells.length; i++) {
        cells[i].style.height = cellSizeString;
        cells[i].style.width = cellSizeString;
    }
}

createGrid(size);
//resize(rows,cells);


//Creates the default 16x16 grid. 
function createDefaultGrid() {
    createRows(16);
    createColumns(16);
};


//Create rows using input 
function createRows (rowNum) {
    for(r = 0; r < rowNum; r++) {
        let row = document.createElement(`div`);
        CONTAINER.appendChild(row).className = "gridRow";
    };
};

//Create columns using input 
function createColumns (colNum) {
    for (i = 0; i < rows.length; i++) {
        for (c = 0; c < colNum; c++) {
            let newCol = document.createElement(`div`);
            rows[c].appendChild(newCol).className = "gridCol";
        }
    }
}

//call create default grid function. 
//createDefaultGrid();


/*
//THIS WORKS FOR SOME REASON?!?! 
grid.addEventListener(`click`, event => {
    console.log(`Hello World!`);
});
*/
