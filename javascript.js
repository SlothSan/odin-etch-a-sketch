//Global Variables
const CONTAINER = document.getElementById(`grid-container`);
let rows = document.getElementsByClassName(`gridRow`);
let cols = document.getElementsByClassName(`gridCol`);
let grid = document.getElementById(`grid-container`);



//Creates the default 16x16 grid. 
function createDefaultGrid() {
    createRows(50);
    createColumns(50);
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
createDefaultGrid();

console.log(grid);


//THIS WORKS FOR SOME REASON?!?! 
grid.addEventListener(`click`, event => {
    console.log(`Hello World!`);
});

//Get width of the Grid and use it for setting the height / width of the cols/rows. 

const ele = document.querySelector(`#grid-container`)

const width = grid.offsetWidth;
const height = grid.offsetHeight;

console.log(width);
console.log(height);

// use this shit to dynamically resize the cols / rows on the grid like a boss ! 