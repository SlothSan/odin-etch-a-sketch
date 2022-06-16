//Global Variables
const grid = document.getElementById(`grid-container`);
const widthGrid = grid.offsetWidth;
const heightGrid = grid.offsetHeight;
let size = 16;

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
function resize () {
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


//Eventlisteners on Divs

grid.addEventListener(`click`, event => {
    console.log("Hello World");
});



createGrid(size);
resize();
