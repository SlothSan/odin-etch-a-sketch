//Global Variables
const CONTAINER = document.getElementById(`grid-container`);
let rows = document.getElementsByClassName("gridRow");



//Creates the default 16x16 grid. 
function createDefaultGrid() {
    createRows(16);
    createColumns(16);
};


//Create rows using input 
function createRows(rowNum) {
    for(r = 0; r < rowNum; r++) {
        let row = document.createElement(`div`);
        CONTAINER.appendChild(row).className = "gridRow";
    };
};

//Create columns using input 
function createColumns(colNum) {
    for (i = 0; i < rows.length; i++) {
        for (c = 0; c < colNum; c++) {
            let newCol = document.createElement(`div`);
            rows[c].appendChild(newCol).className = "gridCol";
        }
    }
}

createDefaultGrid();
