//----------- Base variables and constants

const container = document.querySelector("#container");
const startBtn = document.querySelector("#startBtn");
const clearBtn = document.querySelector("#clearBtn");
const createBtn = document.querySelector("#createBtn");
let tiles = document.querySelectorAll("#tile");


let selectedColor = "blue";
let holdclick = false;

// // Event to check if the left click is held or not
// document.addEventListener("mousedown", () => {
//     holdclick = true;
//     console.log("mouse held");
// });
// document.addEventListener("mouseup", () => {
//     holdclick = false;
//     console.log("mouse released");
// });


//----------- Setup actions




//----------- Buttons definitions

// Interaction of the create and clear button
clearBtn.addEventListener("click", ClearGrid);
createBtn.addEventListener("click", CreateGrid);

//----------- Function on the grid

// Creation of the grid and setting the event listener on all tiles
function CreateGrid() {
    // Delete the previous grid
    DeleteGrid();

    // Ask for the grid size
    let size = prompt("How many tiles by side you want ? (avoid uneven numbers, maximum 100)")
    if (size > 100) {
        while (size > 100) {
            size = prompt("this number doesnt fit. Give a number between 1 and 100");         
        }
    }

    let containerSize = (31 * size) + 31 + "px";
    container.style.width = containerSize;

    // Generate each tiles with their attribute
    for (i = 0; i < (size * size); i++) {
        const gridTile = document.createElement("div");
        gridTile.gridActive = false
        gridTile.setAttribute("class", "tileUnpainted");
        gridTile.setAttribute("id", "tile");
        gridTile.tileNbr = i;

        container.appendChild(gridTile)
        tiles = document.querySelectorAll("#tile");
    }

    // Add event listener on each tiles
    tiles.forEach(tile => {
        // Event on click
            tile.addEventListener("click", () => {
                SwapTile(tile);
            });
        });
};

// Shifting the color of a tile, based on the selected color
function SwapTile(tile){
    if (tile.gridActive) {
        tile.gridActive = false;
        // tile.classList.remove("tilePainted");
        // tile.setAttribute("class", "tileUnpainted");
        tile.style.backgroundColor = "";
        // console.log("Retrait sur la tuile " + tile.tileNbr);
    } else {
        tile.gridActive = true;
        // tile.classList.remove("tileUnpainted");
        // tile.setAttribute("class", "tilePainted");
        tile.style.backgroundColor = selectedColor;
        // console.log("Ajout sur la tuile " + tile.tileNbr);
    };
}

// Erasing the whole grid to a blank canvas
function ClearGrid(){
    tiles.forEach(tile => {
        tile.style.backgroundColor = "";
    });
};

// Deleting the whole grid
function DeleteGrid() {
    tiles.forEach(tile => {
        tile.remove();
    });
};